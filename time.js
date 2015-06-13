function getTime()
{
	var body 		= document.body,
		container	= document.getElementById("content"),
		date		= new Date(),
		nums		= [date.getHours(), date.getMinutes(), date.getSeconds()];
		timeCont	= document.getElementById("time"),
		hexCont		= document.getElementById("color");

	// For formatting purposes
	for(var i = 0, len = nums.length; i < len; ++i)
	{
		if(nums[i] < 10)
			nums[i] = "0" + nums[i];
	}

	var hex = "#" + "" + nums[0] + nums[1] + nums[2];

	body.style.background = hex;
	timeCont.innerHTML = nums[0] + " : " + nums[1] + " : " + nums[2];
	hexCont.innerHTML = hex;

	setTimeout(function(){getTime();} , 1000);
}
document.addEventListener("DOMContentLoaded", function()
{
	getTime();
});