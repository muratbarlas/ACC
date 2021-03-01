var taxi_num = 7000;
var apiURL = 'https://data.cityofnewyork.us/resource/2yzn-sicd.json?$limit='+taxi_num
//not going through all the taxis because I want individual emojis to be visible, gets too much when it's more


//these are place holders for now, they get updated in set up
var lngmin = 100;
var lngmax = -100;
var latmin = 100;
var latmax = -100;


var taxi_list =[] //list to hold instances of taxi class

var dict ={"1": 0,"2": 0,"3": 0,"4": 0,"5": 0} //dictionary holds counters for trips with different tip ranges



function preload(){
	loadJSON(apiURL, fill_taxi_list);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(69,61,85);
	dropdown = createSelect();
	dropdown.position(10,10);
	dropdown.option("All trips", 0)
	dropdown.option("Trips with no tip", 1)
	dropdown.option("Trips with tip between 1$-3$", 2)
	dropdown.option("Trips with tip between 4$-6$", 3)
	dropdown.option("Trips with tip between 7$-9$", 4)
	dropdown.option("Trips with tip >= 10$", 5)
	
	//updates dictionary according to tip values
	for(var i = 0;i<taxi_list.length ;i++){
		if (taxi_list[i].tip == 0.0){
			dict["1"] += 1;
		}
		if (taxi_list[i].tip >= 1.0 && taxi_list[i].tip <=3.0){
			dict["2"] += 1;
		}
		if (taxi_list[i].tip >= 4.0 && taxi_list[i].tip <=6.0){
			dict["3"] += 1;
		}
		if (taxi_list[i].tip >= 7.0 && taxi_list[i].tip <=9.0){
			dict["4"] += 1;
		}
		if (taxi_list[i].tip >= 10.0){
			dict["5"] += 1;
		}


		//the code below finds the min and max lat and lng from the  list
		data_long =parseFloat(taxi_data[i].pickup_longitude)
		data_lat = parseFloat(taxi_data[i].pickup_latitude)
		if(data_lat>-50 && data_lat<50 && data_long>-80 && data_long<-50) {
			if(data_lat<latmin) latmin=data_lat
			if(data_lat>latmax) latmax=data_lat;
			if(data_long<lngmin) lngmin=data_long;
			if(data_long>lngmax) lngmax=data_long;
		}
		


		
	}

}


function draw() {
	background(69,61,85);

	
	textSize(20);
	fill("white");
	text("This map plots NYC taxis according to their recorded passenger pick-up locations.", 10 , 60, 470)
	text("Number of trips currently displayed:", 10, 150)
	
	
	
	if (dropdown.value() == 0){
		textSize(20)
		text(taxi_num, 330,150)
		
		translate(width/2+130, height/2+30);
		scale(0.1, 0.1);
		for(var i = 0;i<taxi_list.length;i++){
			taxi_list[i].render()
		}
		
	}

	else if (dropdown.value() == 1){
		textSize(20)
		text(str(dict["1"]),330,150)

		translate(width/2+130, height/2+30);
		scale(0.1, 0.1);
		for(var i = 0;i<taxi_list.length;i++){
			if (taxi_list[i].tip == 0.0){
				taxi_list[i].render()
			}
		}
	}

	else if (dropdown.value() == 2){
		textSize(20)
		text(str(dict["2"]),330,150)

		translate(width/2+130, height/2+30);
		scale(0.1, 0.1);
		for(var i = 0;i<taxi_list.length;i++){
			if (taxi_list[i].tip >= 1.0 && taxi_list[i].tip <=3.0){
				taxi_list[i].render()
			}
		}
	}

	else if (dropdown.value() == 3){
		textSize(20)
		text(str(dict["3"]),330,150)

		translate(width/2+130, height/2+30);
		scale(0.1, 0.1);
		for(var i = 0;i<taxi_list.length;i++){
			if (taxi_list[i].tip >= 4.0 && taxi_list[i].tip <=6.0){
				taxi_list[i].render()
			}
		}
	}

	else if (dropdown.value() == 4){
		textSize(20)
		text(str(dict["4"]),330,150)

		translate(width/2+130, height/2+30);
		scale(0.1, 0.1);
		for(var i = 0;i<taxi_list.length;i++){
			if (taxi_list[i].tip >= 7.0 && taxi_list[i].tip <=9.0){
				taxi_list[i].render()
			}
		}
	}

	

	else if (dropdown.value() == 5){
		textSize(20)
		text(str(dict["5"]),330,150)

		translate(width/2+130, height/2+30);
		scale(0.1, 0.1);
		for(var i = 0;i<taxi_list.length;i++){
			if (taxi_list[i].tip >= 10.0){
				taxi_list[i].render()
			}
			
		}
	}
	
}


function fill_taxi_list(data){
	taxi_data = data;	
	for(let i=0;i<taxi_num;i++){
		taxi_list[i] = new Taxi(parseFloat(taxi_data[i].pickup_longitude), parseFloat(taxi_data[i].pickup_latitude),parseFloat(taxi_data[i].tip_amount))
	}	
}


class Taxi{
	constructor(lng, lat, tip){
		this.x = lng;
		this.y= lat;
		this.emoji = "🚕";
		this.tip = tip
	}
	
	render(){
		textSize(200);
		text(this.emoji, map(this.x, lngmin, lngmax, -width*7, width*7), map(this.y, latmin, latmax, height*7, -height*7));
	}
		
}