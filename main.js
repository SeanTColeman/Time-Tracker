var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = date + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";


var date =  dayOfWeek + "<br>" + dayOfMonth + " of " + curMonth + "<br>" + curYear;
var time = curHour + ':' + curMinute + ':' + curSeconds + ' ' + curMeridiem;

var dispay = document.getElementById('display');
display.innerHTML = date;

var dateToggle = true;
var timeToggle = false;
document.getElementById('dateBtn').style.background = '#44FFD9';


function displayTime() {
  if (dateToggle === true) {
    display.innerHTML = time;
    display.style.top = "calc(50% - 35px)";
    document.getElementById('name').innerHTML = 'Time';
    document.getElementById('timeBtn').style.background = '#44FFD9';
    document.getElementById('dateBtn').style.background = '';
    dateToggle = false;
    timeToggle = true;
  }
}

function displayDate() {
  if (timeToggle === true) {
      document.getElementById('display').innerHTML = date;
      document.getElementById('name').innerHTML = 'Date';
      display.style.top = "calc(50% - 105px)";
      document.getElementById('timeBtn').style.background = '';
      document.getElementById('dateBtn').style.background = '#44FFD9';
      dateToggle = true;
      timeToggle = false;
  }
}

// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth() + 1; //January is 0
// var yyyy = today.getFullYear();
//
// if (dd < 10) {
//   dd = '0' + dd;
// }
//
// if (mm < 10) {
//   mm = '0' + mm;
// }
//
// today = mm + '/' + dd + '/' + yyyy;


// var today = new Date().toString().split(' ').splice(1,3).join(' / ');
