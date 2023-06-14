var currentdisplayNo = 0;
var display1 = document.getElementById('display-1');
var display2 = document.getElementById('display-2');
var display3 = document.getElementById('display-3');
var display4 = document.getElementById('display-4');
var display5 = document.getElementById('display-5');
var display6 = document.getElementById('display-6');



function zeroFill(string, length) {
	for (var i=0, l=length-string.length; i<l; i++) {
		string = '0' + string;
	}
	return string;
}

function setdisplays() {
	var d = new Date();
	var h = zeroFill(d.getHours().toString(),   2);
	var m = zeroFill(d.getMinutes().toString(), 2);
	var s = zeroFill(d.getSeconds().toString(), 2);
	
	
	display1.className = 'display-container display-size-12 display-no-' + h[0];
	display2.className = 'display-container display-size-12 display-no-' + h[1];

	display3.className = 'display-container display-size-12 display-no-' + m[0];
	display4.className = 'display-container display-size-12 display-no-' + m[1];

	display5.className = 'display-container display-size-12 display-no-' + s[0];
	display6.className = 'display-container display-size-12 display-no-' + s[1];
	


	//document.body.style.backgroundColor = '#' + (s + m + h).toString(16);
}

setInterval(setdisplays, 1000);
setdisplays();