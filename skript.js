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

let bt_index_rgb;

function rotate()
{
	loading = document.getElementById("loads");	
	for (let i = 1; i < 8; i++) {
		bt_index_rgb = document.getElementById("gra_" + i);	
		if (bt_index_rgb.style["background-color"] !== "rgb(0, 0, 0)" && bt_index_rgb.style["visibility"] == "visible"  || i == 1) {
			ar_bt_rgb[i] = ", " + bt_index_rgb.style["background-color"];
		}
		else {
			ar_bt_rgb[i] = "";
		}
	}
	loading.style["border-image"] = "linear-gradient("+ gradus +"deg" + ar_bt_rgb[0] + ar_bt_rgb[1] + ar_bt_rgb[2] + ar_bt_rgb[3] + ar_bt_rgb[4] + ar_bt_rgb[5] +  ar_bt_rgb[6] + ") 5";
	console.log("linear-gradient(0deg" + ar_bt_rgb[0] + ar_bt_rgb[1] + ar_bt_rgb[2] + ar_bt_rgb[3] + ar_bt_rgb[4] + ar_bt_rgb[5] +  ar_bt_rgb[6] + ") 5");
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

	bt_gradient_element = document.getElementById("gra_" + index);
	bt_gradient_element.style["background-color"] = "rgb(" + red_color_int +","+ green_color_int +","+ blue_color_int + ",1.0)"
}

setInterval(slider, 10);

let bt_plus_element;
let index_bt = 1;
let bt;
let index = 1;
let ar_bt_rgb = ["", "", "", "", "", "", ""];

function plus()
{
	bt_plus_element = document.getElementById("plus_bt");
	if(index_bt < 7){
		index_bt = index_bt + 1;
		bt = document.getElementById("gra_" + index_bt);
		bt.style["visibility"] = "visible";
		index = index_bt;
	}

}
function minus()
{
	bt_plus_element = document.getElementById("minus_bt");
	if(index_bt > 1){
		index = index_bt;
		bt = document.getElementById("gra_" + index_bt);
		bt.style["visibility"] = "hidden";
		index_bt = index_bt - 1;
	}
}

let click_bt;
let just_bt;

function click_on_bt()
{
	click_bt = event.target.id;
	console.log(click_bt);
	just_bt = document.getElementById(click_bt);
	if (just_bt.style["visibility"] = "visible"){
		index = click_bt.replace(/\D/g, "");
		console.log(index);
	}
}