//your JS code here. If required.
const targetLevel = document.getElementById("level");

function getDepth(e) {
	let level =0;
	while(e){
		level++;
		e= e.parentElement;
		
	}
	return level;
}

const depth = function getDepth(targetLevel); 
alert("The level of element is: ${depth}");
