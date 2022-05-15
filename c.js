

var config = {
    enableTime: true,
    time_24hr: true,
    minDate: "today",
    maxDate: new Date().fp_incr(7), // 7 days from now
};
flatpickr(".old", config);