// Getting Elements:
var supra = document.querySelectorAll('#old');
var old1 = document.getElementById('old1'); old1.value = bro1// old1.addEventListener('click', setAlarm1);// var young1 = old1.value;
var old2 = document.getElementById('old2'); old2.value = bro2// old2.addEventListener('click', setAlarm2);// var young2 = old2.value;
var old3 = document.getElementById('old3'); old3.value = bro3//  old3.addEventListener('click', setAlarm3);// var young3 = old3.value;
var old4 = document.getElementById('old4'); old4.value = bro4//  old4.addEventListener('click', setAlarm4);// var young4 = old4.value;
var old5 = document.getElementById('old5'); old5.value = bro5//  old5.addEventListener('click', setAlarm5);// var young5 = old5.value;
var old6 = document.getElementById('old6'); old6.value = bro6//  old6.addEventListener('click', setAlarm6);// var young6 = old6.value;

// EventListeners:
//function active() {
//    setAlarm1.old1;
//    setAlarm2.old2;
//    setAlarm3.old3;
//    setAlarm4.old4;
//    setAlarm5.old5;
//    setAlarm6.old6;
//}
//supra.forEach(button => {
//    button.addEventListener('click', ()=>{active();})
// });
//supra.forEach(button => {
  //  button.addEventListener('click', () => {
   //     $("#old").attr("id", 'man');
  //  })
//});    
 old1.addEventListener('click',  savedAlarm1);
 old2.addEventListener('click',  savedAlarm2);
 old3.addEventListener('click',  savedAlarm3);
 old4.addEventListener('click',  savedAlarm4);
 old5.addEventListener('click',  savedAlarm5);
 old6.addEventListener('click',  savedAlarm6);

// Date:
var d = new Date();
var month = d.getMonth()+1;
var year = d.getFullYear();
var day = d.getDate();

// Time:
const hour = d.getHours();
const minutes = d.getMinutes();
const seconds = d.getSeconds();

// FUNCTIONS:
// This function will run whenever alarm is set from the UI
function setAlarm1(a) {
    const alarm = old1,   
    alarmDate = new Date(date+' '+alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    var now = new Date();

// Ringing of ala)rm on time
let timeToAlarm = alarmDate - now;
console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now");
            open('app.html');
        }, timeToAlarm);
    }
}
function setAlarm2(a) {
    const alarm = old2,    
    alarmDate = new Date(date+' '+alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    var now = new Date();

// Ringing of ala)rm on time
let timeToAlarm = alarmDate - now;
console.log(timeToAlarm);   
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now");
            open('app.html');
        }, timeToAlarm);
    }
}
function setAlarm3(a) {
    const alarm = old3,    
    alarmDate = new Date(date+' '+alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    var now = new Date();

// Ringing of ala)rm on time
let timeToAlarm = alarmDate - now;
console.log(timeToAlarm);   
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now");
            open('app.html');
        }, timeToAlarm);
    }
}
function setAlarm4(a) {
    const alarm = old4,    
    alarmDate = new Date(date+' '+alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    var now = new Date();

// Ringing of ala)rm on time
let timeToAlarm = alarmDate - now;
console.log(timeToAlarm);   
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now");
            open('app.html');
        }, timeToAlarm);
    }
}
function setAlarm5(a) {
    const alarm = old5,    
    alarmDate = new Date(date+' '+alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    var now = new Date();

// Ringing of ala)rm on time
let timeToAlarm = alarmDate - now;
console.log(timeToAlarm);   
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now");
            open('app.html');
        }, timeToAlarm);
    }
}
function setAlarm6(a) {
    const alarm = old6,    
    alarmDate = new Date(date+' '+alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    var now = new Date();

// Ringing of ala)rm on time
let timeToAlarm = alarmDate - now;
console.log(timeToAlarm);   
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now");
            open('app.html');
        }, timeToAlarm);
    }
}
function savedAlarm1() {
    localStorage.setItem('bro1', old1.value );
}
function savedAlarm2() {
    localStorage.setItem('bro2', old2.value );
}
function savedAlarm3() {
    localStorage.setItem('bro3', old3.value );
}
function savedAlarm4() {
    localStorage.setItem('bro4', old4.value );
}
function savedAlarm5() {
    localStorage.setItem('bro5', old5.value );
}
function savedAlarm6() {
    localStorage.setItem('bro6', old6.value );
}

// Days Selector:
var d1 = d.getDay();
console.log(d1);
if (d1==1 || d1==2|| d1==3|| d1==4|| d1==5) {
    console.log('super')
}

var time = (`${hour}:${minutes}:${seconds}`);
var date = (`${year}-${month}-${day}`);
console.log(d);
console.log(date+' '+time);

// Getting Elements:
var monday = document.getElementById('m');
var tuesday = document.getElementById('t');
var wednesday = document.getElementById('w');
var thursday = document.getElementById('th');
var friday = document.getElementById('f');
var saturday = document.getElementById('sa');
var sunday = document.getElementById('su');


// Day Selector Function:
function checkDaysSelected() {
    var d1 = d.getDay();
    if (monday.checked && d1==1 && old1.value!=undefined) {
    setAlarm1();
}
else { if (tuesday.checked && d1==2 && old1.value!=undefined) {
    setAlarm1();
}
else { if (wednesday.checked && d1==3 && old1.value!=undefined) {
    setAlarm1();
}
else { if(thursday.checked && d1==4 && old1.value!=undefined) {
    setAlarm1();
}
else { if (friday.checked && d1==5 && old1.value!=undefined) {
    setAlarm1();
}
else { if (saturday.checked && d1==6 && old1.value!=undefined) {
    setAlarm1();
}
else { if (sunday.checked && d1==7 && old1.value!=undefined) {
    setAlarm1();
} } } } } }}
}  

function rupya1() {if (meta1.checked) {
    checkDaysSelected();
  } else {
    console.log("Checkbox is not checked..");
  }}

 function rupya2() {if (meta2.checked) {
    checkDaysSelected();
  } else {
    console.log("Checkbox is not checked..");
  }}

 function rupya3() {if (meta3.checked) {
    checkDaysSelected();
  } else {
    console.log("Checkbox is not checked..");
  }}

 function rupya4() {if (meta4.checked) {
    checkDaysSelected();
  } else {
    console.log("Checkbox is not checked..");
  }}

 function rupya5() {if (meta5.checked) {
    checkDaysSelected();
  } else {
    console.log("Checkbox is not checked..");
  }}

 function rupya6() {if (meta6.checked) {
    checkDaysSelected();
  } else {
    console.log("Checkbox is not checked..");
  }}
  rupya1();rupya2();rupya3();rupya4();rupya5();rupya6();

// toggle switch eventListeners:
meta1.addEventListener("change", rupya1);
meta2.addEventListener('change', rupya2);
meta3.addEventListener('change', rupya3);
meta4.addEventListener('change', rupya4);
meta5.addEventListener('change', rupya5);
meta6.addEventListener('change', rupya6);
console.log(bro1);

var bhai =  document.getElementById('bhai');
var div = document.getElementById('div1');

function noice() {
     div.classList.add('active');
}

function razor(a) {
    a.classList.add('active');
    div.classList.add('active');
}
function knife(a) {
    a.classList.remove('active');
    div.classList.remove('active');
}

setInterval(() => {
    checkDaysSelected();
}, 60000);

var anas = document.getElementById('anas'); anas.addEventListener('change', rabee)

function rabee() {
  if (this.checked) {
    razor(bhai);
  } else { 
     knife(bhai);
  } }