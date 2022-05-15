
var supra = document.querySelectorAll('#old');
// EventListeners:

supra.forEach(button => {
    button.addEventListener('click', setAlarm)
});
supra.forEach(button => {
    button.addEventListener('click', () => {
        $("#old").attr("id", 'man');
    })
});    
    // alarm.addEventListener('click',  savedAlarm)

// FUNCTIONS:
// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    setTimeout(() => {
        const alarm = document.getElementById('man');
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
} , 2000);
}
function savedAlarm() {
    localStorage.setItem('saved', alarm.value );
}



