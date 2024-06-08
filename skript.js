let id;
let element;
let loading;
let first_color;
let second_color;
var buttonStyle;
let buton;
var backgroundImage;
var colors;
let gradus = 0;
let element_speed;
let time = 1;
let secta_1;
let secta_2;

function speed_control(){
	element_speed = event.target.id;

	if (element_speed == "plus") {
		time = time + 0.1;
		console.log(element_speed + time);
	}
	else if (element_speed == "minus" && time >= 0){
		time = time - 0.1;
		console.log(element_speed + time);
	}
}

function color()
{
	loading = document.getElementById("loads");

	element = event.target.id;
	console.log(element);
	buton = document.getElementById(element);

	buttonStyle = window.getComputedStyle(buton);
	backgroundImage = buttonStyle.backgroundImage;
	console.log(backgroundImage);

	loading.style["border-image"]= backgroundImage + 2;

	secta_1 = backgroundImage.substring(0,16);
	secta_2 = backgroundImage.substring(18);
}

function rotate()
{
	loading = document.getElementById("loads");	
	loading.style["border-image"] = secta_1 + gradus + secta_2 + 2;
	gradus = gradus + time;
	if (gradus >= 360)
	{
		gradus = 0;
	}
}

setInterval(rotate, time);
