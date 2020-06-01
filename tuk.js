let bugs = [];

var middle = 0
var moddle = -500

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    bugs.push(new Love());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {

  background(255, 30, 0);

  noStroke();
  textFont('Arial Black');
  textSize(100);
  textAlign(LEFT);

  if ((mouseX > 0) && (mouseX < width) && (mouseY > 50) && (mouseY < 120) ||
  (mouseX > 0) && (mouseX < width) && (mouseY > height - 120) && (mouseY < height - 50)){
    fill(255, 222, 173)
  }
  else {
    fill(1, 66, 254, 200);
  }


  text("BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  ", middle, 120);

  text("BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  BASKETBALL GAME  23/06  ", moddle, height - 50);

  middle = middle - 2

  moddle = moddle - 2

  textAlign(CENTER)
  stroke(255, 222, 173);
  strokeWeight(2)
  noFill();
  textSize(200);
  text("23.06 18:00", width/2, height/1.6)

  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

class Love {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(25, 50);
    this.speed = 1.2;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter );
  }
}
