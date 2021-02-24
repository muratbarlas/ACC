var shapes = [];
var numOfSquaresAcross = 20;
var sizeOfSquare;
var button;
var slider;
var doingAnimation = true;


function startStopAnimation() {
  doingAnimation = !doingAnimation;
}

function setup() {
  slider = createSlider(0, 1, 0.1, 0.1);
	createCanvas(1000, 500);
	sizeOfSquare = width / numOfSquaresAcross;
	background(100);
	for (var x = 0; x < width+10; x += 70){
    for (var y = height; y > -40; y -= 40){
      shapes.push(new Shape(x,y))
    }
  }	
  button = select('button');
  button.mousePressed(startStopAnimation);
  rectMode(CENTER);
}



var rot_val  = 0;
function draw() {
 for(var i=0; i< shapes.length; i++){
    
    shapes[i].render();
    shapes[i].changeColor();
	}
	
	
}

class Shape{
  constructor(x,y){
    this.x = x;
    this.y = y;
	
    
    this.tile_color_start = color(random(60,70),random(180, 240),random(200, 230))
    this.tile_color_end = color(random(60,70),random(180, 240),random(200, 230))
    this.val = 0;
    
    this.r=random(170, 255);
		this.g = random(70, 80);
    this.b = random(200, 210);
  }

  render() {
		push()
		var col_lerp = lerpColor(this.tile_color_start,this.tile_color_end,cos(this.val))
    translate(this.x, this.y);
		rotate(5.89);
    ellipseMode(CENTER);
    fill(col_lerp);
		arc(0, 0, 80, 80, 0, PI + QUARTER_PI, CHORD);
    
    push();
    rectMode(CENTER);
		translate(-8, 15)
    fill(192,192,192);
    if (doingAnimation == true){
      rotate(rot_val);
      //rot_val+=0.1;
      rot_val+=(slider.value()/1000);
    }
    else{rotate(rot_val)}
		fill(this.r, this.g, this.b);
		rect(0, 0, 20, 20);
    
   
    
    
    pop();
		pop()
    
  }

  changeColor(){
    this.val+=.08;
  }
	
}
