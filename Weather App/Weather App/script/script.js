var search = document.getElementById('search-btn');
var citySearch = document.getElementById('city-search');
search.addEventListener('click',main);

//seach
function main(){
var city = document.querySelector('#seachAction > #city-search').value;
//API used to get the weather info of entered city
var apiCall ='http://api.openweathermap.org/data/2.5/weather?q='+ city + '&units=metric&appid=d00da9f93958e92d885ee0cae8349d10'; 
$.getJSON(apiCall, weatherCallback);

//weather info
function weatherCallback(weatherData){
	document.getElementById('location').classList.add('location'); //add a class location to id location
	document.getElementById('temperature').classList.add('location');
	document.getElementById('description').classList.add('location');
	var cityName = weatherData.name + " " + weatherData.sys.country;
	var temp = weatherData.main.temp;
	var description = weatherData.weather[0].description;
	var humidity = weatherData.main.humidity;
	document.getElementById('location').innerHTML = cityName;
	document.getElementById('temperature').innerHTML = "Temperature is : " + temp + " Celcius";
	document.getElementById('description').innerHTML = "The weather in "+ cityName + " is " + description + ".";
	document.getElementById('humidity').innerHTML = "Humidity: " + humidity;
	
//for different weather conditon
	if(description.toString()=="clear sky"){
		sunny();		//call sunny function

	}else if(description.toString()=="scattered clouds" || description.toString()=="broken clouds" || description.toString()=="few clouds"){
		cloudy();

	}else if(description.toString()=="moderate rain" || description.toString()=="light rain"){
		rainy();
	}
	else if(description.toString()=="mist"){
		mist();
	}
	}
	function sunny(){
		var img = document.getElementById('img1');
		img.setAttribute('id','img1'); //set id=img1
		img.setAttribute('src','img/sunny.png');//adding a picture
		img.setAttribute('width','100px');
		img.setAttribute('height','100px');
		locationDiv.appendChild(img); //append child img
		document.getElementById('city-search').innerHTML="";
	}
	function cloudy(){
		var img = document.getElementById('img1'); //search img1 id previusly made 
		//if not previusly made search img1 id in html tag
		img.setAttribute('id','img1');
		img.setAttribute('src','img/cloudy.jpg'); //if another picture source already exists this  will overwrite the picture source with its own
		img.setAttribute('width','100px');
		img.setAttribute('height','100px');
		document.getElementById('city-search').innerHTML="";
	}
	function rainy(){
		var img = document.getElementById('img1');  
		img.setAttribute('src','img/rainy.jpg'); //rainy.png is located in img folder in the current folder
		img.setAttribute('width','100px');
		img.setAttribute('height','100px');
		document.getElementById('city-search').innerHTML="";
	}
	function mist(){
		var img = document.getElementById('img1');  
		img.setAttribute('src','img/mist.png');
		img.setAttribute('width','100px');
		img.setAttribute('height','100px');
		document.getElementById('city-search').innerHTML="";
	}

}
