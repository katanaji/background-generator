var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setInitialInput() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";

	setGradient();	
} 

function randomHexColor() {
	var randomHex = "#";
	var characters = "ABCDEF0123456789";
	var charLength = characters.length;
	for (var i = 0; i < 6; i++) {
		randomHex += characters.charAt(Math.floor(Math.random() * charLength));
	}
	return randomHex;
}

function randomButton() {
	randomButton = document.createElement("button");
	randomButton.innerHTML = "Random Generator";
	body.appendChild(randomButton);
}

function randomGeneratorBackground() {
	color1.value = randomHexColor();
	color2.value = randomHexColor();

	setGradient();
}

setInitialInput();
randomButton();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomGeneratorBackground);