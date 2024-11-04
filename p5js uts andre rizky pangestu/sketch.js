let birds = [];
let isDay = true; // Tracks whether it's day or night
let toggleTimer = 0; // Waktu untuk mengatur peralihan siang/malam


function setup() {
  createCanvas(800, 400);
  // Generate initial bird positions
  for (let i = 0; i < 10; i++) {
    birds.push(new Bird(random(width), random(50, 150)));
  }
}

function draw() {
  // Mengatur peralihan siang dan malam setiap 3 detik
  if (millis() - toggleTimer > 3000) {
    isDay = !isDay; // Toggle antara siang dan malam
    toggleTimer = millis(); // Reset timer
  }

  // Ganti latar belakang sesuai kondisi siang atau malam
  if (isDay) {
    background(135, 206, 250); // Warna biru muda untuk siang
    drawSun();
  } else {
    background(20, 24, 82); // Warna biru gelap untuk malam
    drawMoon();
  }
  drawMountains();
  drawStreet();
  drawBirds();
  
}

function drawSun() {
  fill(255, 223, 0); // Yellow
  ellipse(100, 100, 60, 60); // Sun shape
}

function drawMoon() {
  fill(200); // Light gray
  ellipse(100, 100, 60, 60); // Moon shape
}

function drawBirds() {
  for (let bird of birds) {
    bird.update();
    bird.show();
  }
}

  function drawMountains() {
  noStroke();

  // Distant mountains (light gray)
  fill(200);
  beginShape();
  vertex(0, height / 2);
  vertex(width / 4, height / 4);
  vertex(width / 2, height / 2);
  vertex((3 * width) / 4, height / 3);
  vertex(width, height / 2);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function drawStreet() {
  fill(50);
  rect(0, height - 50, width, 50);

}

// Bird class
class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(5, 12);
    this.speed = random(1, 3);
  }
  


  update() {
    this.x += this.speed;
    if (this.x > width) this.x = -this.size; // Wrap around
  }

  show() {
    fill(0);
    ellipse(this.x, this.y, this.size, this.size / 2); // Simple bird shape
  }
}

