const Lights = Object.freeze({
	RED: Symbol("Lights.RED"),  
  	BLUE: Symbol("Lights.YELLOW"),  
  	GREEN: Symbol("Lights.GREEN") 
})

let light = Lights.GREEN;

function lightChange() {
	var curVal = document.getElementById("lightChangeButton").innerHTML;
	switch (light){
		case Lights.GREEN:
		curVal = "yellow";
		light = Lights.YELLOW;
		break;
		case Lights.YELLOW:
		curVal = "red";
		light = Lights.RED;
		break;
		case Lights.RED:
		curVal = "green";
		light = Lights.GREEN;
		break;
	}
	document.getElementById("lightChangeButton").innerHTML = curVal;
}