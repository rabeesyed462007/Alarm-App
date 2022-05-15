// Digital Clock
const display = document.getElementById('clock');

function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());



    display.innerText=`${hour} : ${minutes} : ${seconds}`
}
function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}
setInterval(updateTime, 1000);


// tutorial 54
console.log("This is tutorial 54");
const alarmSubmit = document.getElementById('alarmSubmit');
const savedAlarms = document.getElementById('savedAlarms')

// Add an event listener to the submit button
savedAlarms.addEventListener('click', alarmPage)
alarmSubmit.addEventListener('click', setAlarm);
alarmSubmit.addEventListener('click', savedAlarm)
// alarmSubmit.addEventListener('click', alarmPage);

 var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/4383');

// function to display saved alarms

function alarmPage() {
    open('c.html')
}

// function to play the alarm ring tone
// function ringBell() {
       // audio.play(); ('https://www.fesliyanstudios.com/play-mp3/4383');
// }

// looping the alarm ringtone
 // audio.loop =true;
 // audio.playbackRate = 1; 
 // function audioloop() {
   //    setInterval(ringBell, 10)
 // }

  

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm'),
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`),
    now = new Date();
    
// Ringing of ala)rm on time
    let timeToAlarm = alarmDate - now;
var ring = console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
           // audioloop();
            open('app.html')
        }, timeToAlarm);
    }
}

function savedAlarm() {
    localStorage.setItem('saved', alarm.value )
}


 // try making v1 and v2 of js
 // SavedAlarm
// setalarm
//
//