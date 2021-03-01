var heart_list = []
var cryingLaugh = []

function preload(){
  //file is comma separated value "csv"
  //and has a header specifying the columns labels
  // header is singular!
  table = loadTable('assets/LastTime.csv', 'csv', 'header');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(100);
  
  dropdown = createSelect();
  // positioning within my canvas
  dropdown.position(10,10);
  // the second number (ie the 1) is what is returned for dropdown.value()
  dropdown.option("Select an option!", 0)
  dropdown.option("Show me the most used emojis", 1);
  dropdown.option("Show me the most used abbrevuations", 2);
  
	for(var i =0; i<200; i++){
		heart_list.push(new Cloud(300,150, 200, '❤️'));
	}
	
	for(var i =0; i<100; i++){
		cryingLaugh.push(new Cloud(300,150, 100, '😂'));
	}
}

function draw() {
  background(220);
  if(dropdown.value() == 1){
	  for(var i=0; i < heart_list.length; i++){
		  heart_list[i].move_cirle();
      heart_list[i].render();
    }
	  for(var i=0; i < cryingLaugh.length; i++){
		  cryingLaugh[i].move_cirle();
      cryingLaugh[i].render();
    }
  }
}

class Cloud{
	constructor(x_pos, y_pos, r, writing){
		this.center_x= x_pos
		this.center_y=y_pos
		this.projection_angle = random(TWO_PI)
		this.rad = random(r)
		this.angl = random(TWO_PI)
		this.x = this.center_x + cos(this.angl)*this.rad
		this.y = this.center_y + sin(this.angl)*this.rad
		this.r = r
		this.writing = writing
		this.speedX = random(-1,1);
    this.speedY = random(-1,1);
	}
	
	render(){
			textSize(20);
			text(this.writing, this.x, this.y);
	}
	
	move_cirle(){
		this.x += this.speedX;
		this.y += this.speedY;
		var d_sq = ((this.x-this.center_x)**2)+((this.y-this.center_y)**2)
		if (d_sq >= (this.r)**2){
      this.speedX *= -0.11*cos(this.projection_angle);
			this.speedY *= -0.11*cos(this.projection_angle);
			this.projection_angle = TWO_PI - this.projection_angle
		}		
	}
	
	move_cloud(){
		this.x += this.speedX;
		this.y += this.speedY;
		var d_sq = ((this.x-this.center_x)**2)+((this.y-this.center_y)**2)
		//console.log(d_sq)
		//console.log(this.r)
		if (d_sq >= (this.r)**2){
      this.speedX *= -1
			this.speedY *= -1
		}
	}
	
	
}