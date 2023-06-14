let NowDay = document.querySelector("#day");
let NowMonth = document.querySelector("#month");
let NowDate = document.querySelector("#date");
let NowYear = document.querySelector("#year");

let date = new Date();

let day = date.getDay();

//converting day number into the day name
switch(day)
{
	case 0:
		NowDay.innerText = "Sunday";
		break;
	case 1:
		NowDay.innerText = "Monday";
		break;
	case 2:
		NowDay.innerText = "Tuesday";
		break;
	case 3:
		NowDay.innerText = "Wednesday";
		break;
	case 4:
		NowDay.innerText = "Thursday";
		break;
	case 5:
		NowDay.innerText = "Friday";
		break;
	case 6:
		NowDay.innerText = "Saturday";
		break;
	default:
		NowDay.innerText = "Syntax Error";
}

let year = date.getFullYear();
NowYear.innerText = year;

let month = date.getMonth();
//converting Month numbers into the month name
switch(month)
{
	case 0:
		NowMonth.innerText = "January";
		break;
	case 1:
		NowMonth.innerText = "February";
		break;
	case 2:
		NowMonth.innerText = "March";
		break;
	case 3:
		NowMonth.innerText = "April";
		break;
	case 4:
		NowMonth.innerText = "May";
		break;
	case 5:
		NowMonth.innerText = "June";
		break;
	case 6:
		NowMonth.innerText = "July";
		break;
	case 7:
		NowMonth.innerText = "August";
		break;
	case 8:
		NowMonth.innerText = "September";
		break;
	case 9:
		NowMonth.innerText = "October";
		break;
	case 10:
		NowMonth.innerText = "November";
		break;
	case 11:
		NowMonth.innerText = "December";
		break;
	default:
		NowMonth.innerText = "Syntax Error";
}


let TodayDate = date.getDate();
NowDate.innerText = TodayDate;
