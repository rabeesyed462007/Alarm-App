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

var monday1 = document.getElementById('m1');
    var tuesday1 = document.getElementById('t1');
    var wednesday1 = document.getElementById('w1');
    var thursday1 = document.getElementById('th1');
    var friday1 = document.getElementById('f1');
    var saturday1 = document.getElementById('sa1');
    var sunday1 = document.getElementById('su1');
    var monday2 = document.getElementById('m2');
    var tuesday2 = document.getElementById('t2');
    var wednesday2 = document.getElementById('w2');
    var thursday2 = document.getElementById('th2');
    var friday2 = document.getElementById('f2');
    var saturday2 = document.getElementById('sa2');
    var sunday2 = document.getElementById('su2');
    var monday3 = document.getElementById('m3');
    var tuesday3 = document.getElementById('t3');
    var wednesday3 = document.getElementById('w3');
    var thursday3 = document.getElementById('th3');
    var friday3 = document.getElementById('f3');
    var saturday3 = document.getElementById('sa3');
    var sunday3 = document.getElementById('su3');
    var monday4 = document.getElementById('m4');
    var tuesday4 = document.getElementById('t4');
    var wednesday4 = document.getElementById('w4');
    var thursday4 = document.getElementById('th4');
    var friday4 = document.getElementById('f4');
    var saturday4 = document.getElementById('sa4');
    var sunday4 = document.getElementById('su4');
    var monday5 = document.getElementById('m5');
    var tuesday5 = document.getElementById('t5');
    var wednesday5 = document.getElementById('w5');
    var thursday5 = document.getElementById('th5');
    var friday5 = document.getElementById('f5');
    var saturday5 = document.getElementById('sa5');
    var sunday5 = document.getElementById('su5');
    var monday6 = document.getElementById('m6');
    var tuesday6 = document.getElementById('t6');
    var wednesday6 = document.getElementById('w6');
    var thursday6 = document.getElementById('th6');
    var friday6 = document.getElementById('f6');
    var saturday6 = document.getElementById('sa6');
    var sunday6 = document.getElementById('su6');

// Day Selector Function:

    var d1 = d.getDay();
   function checkDaysSelected () { if (monday1.checked && d1==1 && old1.value!=undefined || tuesday1.checked && d1==2 && old1.value!=undefined || 
        wednesday1.checked && d1==3 && old1.value!=undefined || thursday1.checked && d1==4 && old1.value!=undefined || 
        friday1.checked && d1==5 && old1.value!=undefined || saturday1.checked && d1==6 && old1.value!=undefined || 
        sunday1.checked && d1==0 && old1.value!=undefined) {
    setAlarm1();
}}
 function checkDaysSelected2 () { if (monday2.checked && d1==1 && old2.value!=undefined || tuesday2.checked && d1==2 && old2.value!=undefined || 
           wednesday2.checked && d1==3 && old2.value!=undefined || thursday2.checked && d1==4 && old2.value!=undefined || 
           friday2.checked && d1==5 && old2.value!=undefined || saturday2.checked && d1==6 && old2.value!=undefined || 
           sunday2.checked && d1==0 && old2.value!=undefined) {
    setAlarm2();
}}
function checkDaysSelected3 () { if (monday3.checked && d1==1 && old3.value!=undefined || tuesday3.checked && d1==2 && old3.value!=undefined || 
           wednesday3.checked && d1==3 && old3.value!=undefined || thursday3.checked && d1==4 && old3.value!=undefined || 
           friday3.checked && d1==5 && old3.value!=undefined || saturday3.checked && d1==6 && old3.value!=undefined || 
           sunday3.checked && d1==0 && old3.value!=undefined) {
    setAlarm3();
}}
function checkDaysSelected4 () { if(monday4.checked && d1==1 && old4.value!=undefined || tuesday4.checked && d1==2 && old4.value!=undefined || 
          wednesday4.checked && d1==3 && old4.value!=undefined || thursday4.checked && d1==4 && old4.value!=undefined || 
          friday4.checked && d1==5 && old4.value!=undefined || saturday4.checked && d1==6 && old4.value!=undefined || 
          sunday4.checked && d1==0 && old4.value!=undefined) {
    setAlarm4();
}}
function checkDaysSelected5 () { if (monday5.checked && d1==1 && old5.value!=undefined || tuesday5.checked && d1==2 && old5.value!=undefined || 
           wednesday5.checked && d1==3 && old5.value!=undefined || thursday5.checked && d1==4 && old5.value!=undefined || 
           friday5.checked && d1==5 && old5.value!=undefined || saturday5.checked && d1==6 && old5.value!=undefined || 
           sunday5.checked && d1==0 && old5.value!=undefined) {
    setAlarm5();
}}
function checkDaysSelected6 () { if (monday6.checked && d1==1 && old6.value!=undefined || tuesday6.checked && d1==2 && old6.value!=undefined || 
           wednesday6.checked && d1==3 && old6.value!=undefined || thursday6.checked && d1==4 && old6.value!=undefined || 
           friday6.checked && d1==5 && old6.value!=undefined || saturday6.checked && d1==6 && old6.value!=undefined || 
           sunday6.checked && d1==0 && old6.value!=undefined) {
    setAlarm6();
}}
// else { if (days[6].checked && d1==0 && old1.value!=undefined) {
//     setAlarm1();
// }} 
  


function rupya1() {if (meta1.checked) {
    checkDaysSelected();
  } else {
    console.log("Checkbox is not checked..");
  }}

 function rupya2() {if (meta2.checked) {
    checkDaysSelected2();
  } else {
    console.log("Checkbox is not checked..");
  }}

 function rupya3() {if (meta3.checked) {
    checkDaysSelected3();
  } else {
    console.log("Checkbox is not checked..");
  }}

 function rupya4() {if (meta4.checked) {
    checkDaysSelected4();
  } else {
    console.log("Checkbox is not checked..");
  }}

 function rupya5() {if (meta5.checked) {
    checkDaysSelected5();
  } else {
    console.log("Checkbox is not checked..");
  }}

 function rupya6() {if (meta6.checked) {
    checkDaysSelected6();
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
console.log(date);
console.log(time);
console.log(d1);

// Nothing here
var bhai1 =  document.getElementById('bhai1');
var bhai2 =  document.getElementById('bhai2');
var bhai3 =  document.getElementById('bhai3');
var bhai4 =  document.getElementById('bhai4');
var bhai5 =  document.getElementById('bhai5');
var bhai6 =  document.getElementById('bhai6');
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');
var div4 = document.getElementById('div4');
var div5 = document.getElementById('div5');
var div6 = document.getElementById('div6');

//function noice() {
 //    div1.classList.add('active');
// }


function razor1(a) {
    bhai1.classList.add('active');
    div1.classList.add('active');
}
function razor2(a) {
    bhai2.classList.add('active');
    div2.classList.add('active');
}
function razor3(a) {
    bhai3.classList.add('active');
    div3.classList.add('active');
}
function razor4(a) {
    bhai4.classList.add('active');
    div4.classList.add('active');
}
function razor5(a) {
    bhai5.classList.add('active');
    div5.classList.add('active');
}
function razor6(a) {
    bhai6.classList.add('active');
    div6.classList.add('active');
}
function knife1(a) {
    bhai1.classList.remove('active');
    div1.classList.remove('active');
}
function knife2(a) {
    bhai2.classList.remove('active');
    div2.classList.remove('active');
}
function knife3(a) {
    bhai3.classList.remove('active');
    div3.classList.remove('active');
}
function knife4(a) {
    bhai4.classList.remove('active');
    div4.classList.remove('active');
}
function knife5(a) {
    bhai5.classList.remove('active');
    div5.classList.remove('active');
}
function knife6(a) {
    bhai6.classList.remove('active');
    div6.classList.remove('active');
}

//  setInterval(() => {
//  checkDaysSelected();
//  }, 10000);

var anas1 = document.getElementById('anas1'); anas1.addEventListener('change', rabee1);
var anas2 = document.getElementById('anas2'); anas2.addEventListener('change', rabee2);
var anas3 = document.getElementById('anas3'); anas3.addEventListener('change', rabee3);
var anas4 = document.getElementById('anas4'); anas4.addEventListener('change', rabee4);
var anas5 = document.getElementById('anas5'); anas5.addEventListener('change', rabee5);
var anas6 = document.getElementById('anas6'); anas6.addEventListener('change', rabee6);

function rabee1() {
  if (this.checked) {
    razor1();
  } else { 
     knife1();
  } }
function rabee2() {
  if (this.checked) {
    razor2();
  } else { 
     knife2();
  } }
function rabee3() {
  if (this.checked) {
    razor3();
  } else { 
     knife3();
  } }
function rabee4() {
  if (this.checked) {
    razor4();
  } else { 
     knife4();
  } }
function rabee5() {
  if (this.checked) {
    razor5();
  } else { 
     knife5();
  } }
function rabee6() {
  if (this.checked) {
    razor6();
  } else { 
     knife6();
  } }
