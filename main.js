var display = document.getElementById('display');
window.onload = updateClock();

function updateClock() {
  var objToday = new Date();
  var curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours());
  var curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes();
  var curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds();
  var curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";

  var time = curHour + ':' + curMinute + ':' + curSeconds + ' ' + curMeridiem;

  display.innerHTML = time;
}

myTimer = setInterval(updateClock, 1000);

function gettingDate() {
  var objToday = new Date();
  var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  var dayOfWeek = weekday[objToday.getDay()];
  var domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }();
  var dayOfMonth = date + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder;
  var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  var curMonth = months[objToday.getMonth()];
  var curYear = objToday.getFullYear();

  var date =  dayOfWeek + "<br>" + dayOfMonth + " of " + curMonth + "<br>" + curYear;

  display.innerHTML = date;

  clearInterval(myTimer);
}


var dateToggle = false;
var timeToggle = true;

document.getElementById('timeBtn').style.background = '#44FFD9';


function displayTime() {
  if (dateToggle === true) {
    updateClock();
    myTimer = setInterval(updateClock, 1000);
    document.getElementById('name').innerHTML = 'Time';
    document.getElementById('timeBtn').style.background = '#44FFD9';
    document.getElementById('dateBtn').style.background = '';
    dateToggle = false;
    timeToggle = true;
  }
}

function displayDate() {
  if (timeToggle === true) {
    gettingDate();
    document.getElementById('name').innerHTML = 'Date';
    document.getElementById('timeBtn').style.background = '';
    document.getElementById('dateBtn').style.background = '#44FFD9';
    dateToggle = true;
    timeToggle = false;
  }
}
