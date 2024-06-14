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
let time = 2;
let secta_1;
let secta_2;

let red_color_int;
let red_slider_element;

let green_color_int;
let green_slider_element;

let blue_color_int;
let blue_slider_element;

let bt_gradient_element;

function speed_control(){
	element_speed = event.target.id;

	if (element_speed == "plus") {
		time = time + 0.5;
		console.log(element_speed + time);
	}
	else if (element_speed == "minus" && time >= 1){
		time = time - 0.5;
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

function slider()
{
	red_slider_element = document.getElementById("red");
	red_color_int = red_slider_element.value;
	red_slider_element.style["background"] = "rgb(" + red_color_int + ",0 , 0, 1.0)";

	green_slider_element = document.getElementById("green");
	green_color_int = green_slider_element.value;
	green_slider_element.style["background"] = "rgb(0 " + green_color_int + " , 0, 1.0)";

	blue_slider_element = document.getElementById("blue");
	blue_color_int = blue_slider_element.value;
	blue_slider_element.style["background"] = "rgb( 0, 0, " + blue_color_int + ",1.0)";

	bt_gradient_element = document.getElementById("gra_" + index_bt);
	bt_gradient_element.style["background-color"] = "rgb(" + red_color_int +","+ green_color_int +","+ blue_color_int + ",1.0)"
}

setInterval(slider, 10);

let bt_plus_element;
let index_bt = 1;
let bt;

function plus()
{
	bt_plus_element = document.getElementById("plus_bt");
	if(index_bt < 8){
		index_bt = index_bt + 1;
		bt = document.getElementById("gra_" + index_bt);
		bt.style["visibility"] = "visible";
	}

}
function minus()
{
	bt_plus_element = document.getElementById("minus_bt");
	if(index_bt > 1){
		bt = document.getElementById("gra_" + index_bt);
		bt.style["visibility"] = "hidden";
		index_bt = index_bt - 1;
	}
}
