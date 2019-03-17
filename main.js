var display = document.getElementById('display');
window.onload = updateClock();

function updateClock() {
  var objToday = new Date();
  var curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours());
  var curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes();
  var curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds();
  var curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";

  var time = curHour + ':' + curMinute + ':' + curSeconds + ' ' + curMeridiem;

  display.innerText = time;
}

myTimer = setInterval(updateClock, 1000);

function gettingDate() {
  clearInterval(myTimer);
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
}

let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;
//Define var to hold stopwatch status
let status = "stopped";

function stopWatch() {

  seconds++;

  if(seconds / 60 === 1){
       seconds = 0;
       minutes++;

       if(minutes / 60 === 1){
           minutes = 0;
           hours++;
       }
   }
   //If seconds/minutes/hours are only one digit, add a leading 0 to the value
   if(seconds < 10){
       displaySeconds = "0" + seconds.toString();
   }
   else{
       displaySeconds = seconds;
   }

   if(minutes < 10){
       displayMinutes = "0" + minutes.toString();
   }
   else{
       displayMinutes = minutes;
   }

   if(hours < 10){
       displayHours = "0" + hours.toString();
   }
   else{
       displayHours = hours;
   }

   //Display updated time values to user
   display.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
  if(status === "stopped"){

    //Start the stopwatch (by calling the setInterval() function)
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStopBtn").innerHTML = "Stop";
    status = "started";

  } else{

    window.clearInterval(interval);
    document.getElementById("startStopBtn").innerHTML = "Start";
    status = "stopped";
  }
}

function reset() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.innerHTML = '00:00:00';
  document.getElementById("startStopBtn").innerHTML = "Start";
}

var stopWatchToggle = false;
var dateToggle = false;
var timeToggle = true;

document.getElementById('timeBtn').style.background = '#44FFD9';

function displayTime() {
  if (dateToggle === true || stopWatchToggle === true) {
    clearInterval(interval);
    updateClock();
    removeElement();
    myTimer = setInterval(updateClock, 1000);
    document.getElementById('name').innerText = 'Time';
    document.getElementById('timeBtn').style.background = '#44FFD9';
    document.getElementById('dateBtn').style.background = '';

    dateToggle = false;
    timeToggle = true;
    stopWatchToggle = false;
  }
}

function displayDate() {
  if (timeToggle === true || stopWatchToggle === true) {
    clearInterval(interval);
    gettingDate();
    removeElement();
    document.getElementById('name').innerText = 'Date';
    document.getElementById('timeBtn').style.background = '';
    document.getElementById('stopWatchBtn').style.background = '';
    document.getElementById('dateBtn').style.background = '#44FFD9';

    dateToggle = true;
    timeToggle = false;
    stopWatchToggle = false;
  }
}

function displayStopWatch () {
  if (timeToggle === true || dateToggle === true) {
    clearInterval(myTimer);
    display.innerHTML = '00:00:00';
    document.getElementById('name').innerText = 'Stop Watch';
    document.getElementById('timeBtn').style.background = '';
    document.getElementById('dateBtn').style.background = '';
    document.getElementById('stopWatchBtn').style.background = '#44FFD9';

    let stopWatchBtns = document.createElement('div');
    stopWatchBtns.id = 'stopWatchBtns';

    let startStopBtn = document.createElement('button');
    startStopBtn.id = 'startStopBtn';
    startStopBtn.innerText = 'Start';
    startStopBtn.setAttribute('onclick', 'startStop()');

    let resetBtn = document. createElement('button');
    resetBtn.id = 'resetBtn';
    resetBtn.innerText = 'Reset';
    resetBtn.setAttribute('onclick', 'reset()');

    document.body.prepend(stopWatchBtns);
    stopWatchBtns.appendChild(startStopBtn);
    stopWatchBtns.appendChild(resetBtn);

    dateToggle = false;
    timeToggle = false;
    stopWatchToggle = true;
  }
}



function removeElement() {
  let element = document.getElementById('stopWatchBtns');
  if (element) {
    element.parentNode.removeChild(element);
  }
}
