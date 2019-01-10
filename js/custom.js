function firstFunc() {
	document.getElementById("demo").innerHTML="welcome to my page";
}

/*second*/
$(document).ready(function(){
	$("p").click(function(){
		alert("Welcome to my Page");
	});
});
/*4th*/

function maxText(){
	document.getElementById("big").style.fontSize="35px";
}
/*third*/
$(document).ready(function(){
	$("#open").click(function(){
		alert("Window opened");
	});

	$(".hide").click(function(){
		$(".hide").hide(5000);
	});
});
/*array sort*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("sorting").innerHTML = fruits;

function arraySort() {
  fruits.sort();
  document.getElementById("sorting").innerHTML = fruits;
}

/*lights*/
function lightON(){
	document.getElementById("myImg").src="images/bulbon.gif";
}
function lightOFF(){
	document.getElementById("myImg").src="images/bulboff.gif";
}
