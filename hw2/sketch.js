var myParticles = [];

function setup() {
  createCanvas(1000, 1000);
  var cButton = select('#clear_button');
  cButton.mousePressed(clearParticles);
  //deleted paranthesis for the clear button to work
}

function draw() {
  background(220);

  for(var i=0; i < myParticles.length; i++){
    //added .length so the loop  would stop when it goes through all the array
    myParticles[i].move();  //added paranthesis for the call
    myParticles[i].render()
  }

}

function clearParticles(){
  myParticles = [];
}

function mouseDragged() {
  var tempParticle = new Particle(mouseX,mouseY);
  myParticles.push(tempParticle);
}

class Particle {
  constructor(mX,mY) {
    this.x = mX;
    this.y = mY;
    //changed it with mX and mY so  that it would match the parameters
    this.speedX = random(-3,3);
    this.speedY = random(-3,3);
    this.col = color(random(255), random(255), random(255));
    this.diameter = random(3,15);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // if the particles approaches the 'wall' change direction
    if (this.x > width || this.x < 0) this.speedX *= -1;
    if (this.y > height || this.y < 0) this.speedY *= -1;
  }

  render() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    //it should be this.x and this.y
  }
}