let id;
let element;
let loading;
let first_color;
let second_color;
var buttonStyle;
let buton;
var backgroundImage;
var colors;
function color()
{
	loading = document.getElementById("loads");

	element = event.target.id;
	console.log(element);
	buton = document.getElementById(element);

	buttonStyle = window.getComputedStyle(buton);
	backgroundImage = buttonStyle.backgroundImage;
	console.log(backgroundImage);

	loading.borderimage = backgroundImage;
}