function hello() {
	var m = document.getElementById("name").value;
	
	document.getElementById('hasil').innerHTML =  m;
}

function cek() {
	var n = document.getElementById("subject").value;
	var e = document.getElementById("email").value;
	var c = document.getElementById("comment").value;
	
	document.getElementById('hasil1').innerHTML =  n;
	document.getElementById('hasil2').innerHTML =  e;
	document.getElementById('hasil3').innerHTML =  c;
}