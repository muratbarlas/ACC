var heart_list = []
var heart_face =[]
var cryingLaugh = []
var thumbs =[]
var glasses =[]
var smile = []

var lol =[]
var omg =[]
var idk =[]
var lmk =[]
var tbh =[]
var jk=[]


sound_dict = {"rain":0, "ocean":0, "wind":0, "birds":0, "whitenoise":0, "instrumental":0}
abr_dict = {"lol":0, "lmk":0, "omg":0, "idk":0, "jk":0, "tbh":0}
emoji_dict = {"😂":0, "❤️":0, "👍":0, "😃":0, "😎":0, "🥰":0}


function preload(){
  table = loadTable('assets/ACC-3.csv', 'csv', 'header');
  new_font = loadFont('assets/new_font.otf');
  rain = loadImage("assets/rain.png")
  piano = loadImage("assets/piano.png")
  tv = loadImage("assets/tv.png")
  wind = loadImage("assets/wind.png")
  ocean = loadImage("assets/ocean.png")
  bird = loadImage("assets/bird.png")

  
}





function setup() {
  createCanvas(1200, 700);
  background(184, 226, 242);

  for(var i=0; i<table.getRowCount(); i++){
	emoji_dict["😂"] -= int(table.getString(i,1))
	emoji_dict["❤️"] -= int(table.getString(i,2))
	emoji_dict["👍"] -= int(table.getString(i,3))
	emoji_dict["😃"] -= int(table.getString(i,4))
	emoji_dict["😎"] -= int(table.getString(i,5))
	emoji_dict["🥰"] -= int(table.getString(i,6))
	abr_dict["lol"] -= int(table.getString(i,13))
	abr_dict["lmk"] -= int(table.getString(i,14))
    abr_dict["omg"] -= int(table.getString(i,15))
    abr_dict["idk"] -= int(table.getString(i,16))
    abr_dict["jk"] -= int(table.getString(i,17))
    abr_dict["tbh"] -= int(table.getString(i,18))
	sound_dict["rain"] -= int(table.getString(i,7))
	sound_dict["ocean"] -= int(table.getString(i,8))
	sound_dict["wind"] -= int(table.getString(i,9))
	sound_dict["birds"] -= int(table.getString(i,10))
	sound_dict["whitenoise"] -= int(table.getString(i,11))
	sound_dict["instrumental"] -= int(table.getString(i,12))
  }


  console.log(sound_dict)
  
  
  dropdown = createSelect();
  dropdown.position(10,10);
  //dropdown.option("Select an option!", 0)
  dropdown.option("Show me the most used emojis", 1);
  dropdown.option("Show me the most used abbreviations", 2);
  dropdown.option("Show me the most relaxing sounds", 3);
	for(var i =0; i<200; i++){
		heart_list.push(new moving_text(width/2,height/2, map(emoji_dict['❤️'], -137,-87,100, 325), '❤️'));
		if (i<=100){
			cryingLaugh.push(new moving_text(width/2,height/2, map(emoji_dict['😂'], -137,-87,100, 325), '😂'));
			heart_face.push(new moving_text(width/2,height/2, map(emoji_dict['🥰'], -137,-87,100, 325), '🥰'));
			thumbs.push(new moving_text(width/2,height/2, map(emoji_dict['👍'], -137,-87,100, 325), '👍'));
		}
		if (i<=70){
			glasses.push(new moving_text(width/2,height/2, map(emoji_dict['😎'], -137,-87,100, 325), '😎'));
		}
		if(i<=50){
			smile.push(new moving_text(width/2,height/2, map(emoji_dict['😃'], -137,-87,100, 325), '😃'));
	
		}
	}
	
	

for(var i =0; i<map(abr_dict['lol'], -141,-91,10, 50); i++){
	lol.push(new moving_text(210,200, map(abr_dict['lol'], -141,-91,50, 150), 'lol'));
}

for(var i =0; i<map(abr_dict['omg'], -141,-91,10, 50); i++){
	omg.push(new moving_text(620,200, map(abr_dict['omg'], -141,-91,50, 150), 'omg'));
}

for(var i =0; i<map(abr_dict['idk'], -141,-91,10, 50); i++){
	idk.push(new moving_text(1000,200, map(abr_dict['idk'], -141,-91,50, 150), 'idk'));
}


for(var i =0; i<map(abr_dict['lmk'], -141,-91,10, 50); i++){
	lmk.push(new moving_text(210, 550, map(abr_dict['lmk'], -141,-91,50, 150), 'lmk'));
}

for(var i =0; i<map(abr_dict['tbh'], -141,-91,10, 50); i++){
	tbh.push(new moving_text(620,550, map(abr_dict['tbh'], -141,-91,50, 150), 'tbh'));
}

for(var i =0; i<map(abr_dict['jk'], -141,-91,10, 50); i++){
	jk.push(new moving_text(1000,550, map(abr_dict['jk'], -141,-91,50, 150), 'jk'));
}

	
}

function draw() {
  background(184, 226, 242);
  if(dropdown.value() == 1){
	textSize(20);
	textFont('Aariel')
	for(var i=0; i < heart_list.length; i++){
		  heart_list[i].move_cirle();
      	  heart_list[i].render();
    }
	for(var i=0; i < cryingLaugh.length; i++){
		  cryingLaugh[i].move_cirle();
          cryingLaugh[i].render();
	}
	
	for(var i=0; i < thumbs.length; i++){
		thumbs[i].move_cirle();
		thumbs[i].render();
	  }
	  
	  for(var i=0; i < glasses.length; i++){
		glasses[i].move_cirle();
		glasses[i].render();
	  }
	  
	  for(var i=0; i < smile.length; i++){
		smile[i].move_cirle();
		smile[i].render();
	  }
	  
	  for(var i=0; i < heart_face.length; i++){
		heart_face[i].move_cirle();
		heart_face[i].render();
	  }
  }
	  
if(dropdown.value() == 2){
	textSize(32);
	textFont(new_font);
	for(var i=0; i < lol.length; i++){
		lol[i].move_cloud();
		lol[i].render();
		
	}

	for(var i=0; i < omg.length; i++){
		omg[i].move_cloud();
		omg[i].render();
		
	}

	for(var i=0; i < idk.length; i++){
		idk[i].move_cloud();
		idk[i].render();
		
	}

	for(var i=0; i < lmk.length; i++){
		lmk[i].move_cloud();
		lmk[i].render();
	}

	for(var i=0; i < tbh.length; i++){
		tbh[i].move_cloud();
		tbh[i].render();
	}

	for(var i=0; i < jk.length; i++){
		jk[i].move_cloud();
		jk[i].render();
	}

  }

  if(dropdown.value() == 3){
	bird.resize(map(sound_dict["birds"],-129, -70,50,500),0)
	ocean.resize(map(sound_dict["ocean"],-129, -70,50,350),map(sound_dict["ocean"],-129, -70,50,350))
	wind.resize(map(sound_dict["wind"],-129, -100,50,300),0)
	tv.resize(map(sound_dict["whitenoise"],-129, -70,50,300),0)
	piano.resize(map(sound_dict["instrumental"],-129, -70,50,300),0)
	rain.resize(map(sound_dict["rain"],-129, -70,50,200),0)
	


	  imageMode(CENTER)
	  image(tv, 100, height/2)
	  im =image(bird, 200, height/2)
	  image(piano, 300, height/2)
	  image(wind, 500, height/2)
	  image(rain, 725, height/2)
	  image(ocean, 1000, height/2-50)


  }

}



class moving_text{
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