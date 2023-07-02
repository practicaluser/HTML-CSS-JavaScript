var secs = document.querySelector(".sec");
var mins = document.querySelector(".min");
var hrs = document.querySelector(".hr");
var days = document.querySelector(".day");

var getsecs = null;
var getmins = null;
var gethrs = null;
var getdays = null;

var nowsecs = 0;
var nowmins = 0;
var nowhrs = 0;

function clock(){
	var date = new Date();
	
	getsecs = date.getSeconds();
	getmins = date.getMinutes();
	gethrs = date.getHours();
	getdays = date.getDay();
	
	if(getsecs < 10){
		nowsecs = "0" + getsecs;
	}
	else
		{
			nowsecs = getsecs;
		}
	
	if(getmins < 10){
		nowmins = "0" + getmins;
	}
	else
		{
			nowmins = getmins;
		}
	
	if(gethrs < 10){
		nowhrs = "0" + gethrs;
	}
	else
		{
			nowhrs = gethrs;
		}
	
	switch(getdays){
		case 0:
			getdays = "Sun";
			break;
		case 1:
			getdays = "Mon";
			break;
		case 2:
			getdays = "Tue";
			break;
		case 3:
			getdays = "Wed";
			break;
		case 4:
			getdays = "Thu";
			break;
		case 5:
			getdays = "Fri";
			break;
		case 6:
			getdays = "Sat";
			break;
		default:
			getdays = "Syntax Error";
	}
	
	secs.innerText = nowsecs;
	mins.innerText = nowmins;
	hrs.innerText = nowhrs;
	days.innerText = getdays;
}
setInterval(clock,100);