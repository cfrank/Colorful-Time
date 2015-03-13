function getTime()
{
	var body 		= document.body,
		container	= document.getElementById("content"),
		date		= new Date(),
		hours		= date.getHours(),
		minutes		= date.getMinutes(),
		seconds		= date.getSeconds(),
		timeCont	= document.getElementById("time"),
		hexCont		= document.getElementById("color");

	// For formatting purposes
	if(hours < 10)
		hours = "0" + hours;
	if(minutes < 10)
		minutes = "0" + minutes;
	if(seconds < 10)
		seconds = "0" + seconds;

	var hex = "#" + "" + hours + minutes + seconds;
	
	body.style.background = hex;
	timeCont.innerHTML = hours + " : " + minutes + " : " + seconds;
	hexCont.innerHTML = hex;

	setTimeout(function(){getTime();} , 1000);
}
document.addEventListener("DOMContentLoaded", function()
{
	getTime();
});