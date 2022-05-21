// Flat Pickr Configuration
var config = {
    enableTime: true,
    time_24hr: true,
    noCalendar: true,
    minDate: "today",
    maxDate: new Date().fp_incr(7), // 7 days from now
};
flatpickr(".old", config);


function toggle(b){b.value=(b.value=="ON")?"OFF":"ON";}

var meta1 = document.getElementById("meta1");
var meta2 = document.getElementById("meta2");
var meta3 = document.getElementById("meta3");
var meta4 = document.getElementById("meta4");
var meta5 = document.getElementById("meta5");
var meta6 = document.getElementById("meta6");

 