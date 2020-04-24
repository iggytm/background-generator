var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var defaultGradient = window.getComputedStyle(document.body, null).getPropertyValue("background-image");
var button = document.querySelector(".button");

function defaultColors() {
	document.querySelector(".color1").defaultValue = "#ff0000";
	document.querySelector(".color2").defaultValue = "#ffff00";
	css.textContent = defaultGradient + ";";
}

// Generate a random Color - https://css-tricks.com/snippets/javascript/random-hex-color/
function randomColour() {
	var randomNumber = Math.floor(Math.random()*16777215).toString(16);
	var randomColour = "#" + randomNumber;	
	return randomColour;
}

function randomBackground() {
	color1.value = randomColour();
	color2.value = randomColour();
	setGradient();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
defaultColors();
button.addEventListener("click", randomBackground);





