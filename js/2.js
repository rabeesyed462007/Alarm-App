

console.log("This is tutorial 54");
const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

 var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/4383');



// function to play the alarm ring tone
 function ringBell() {
       // audio.play(); ('https://www.fesliyanstudios.com/play-mp3/4383');
 }

// looping the alarm ringtone
 // audio.loop =true;
 // audio.playbackRate = 1; 
 function audioloop() {
      setInterval(ringBell, 10)
 }

  

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm'),
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`),
    now = new Date();
    
// Ringing of alarm on time
    let timeToAlarm = alarmDate - now;
var ring = console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            audioloop();
            open('app.html');
        }, timeToAlarm);
    }
}
 // try making v1 and v2 of js
 


