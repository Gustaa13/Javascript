let digitalClock = document.querySelector('.digital');
let secondPointer = document.querySelector('.p_segundos');
let minutePointer = document.querySelector('.p_minutos');
let hourPointer = document.querySelector('.p_horas');

function completeTime(time) {
   return (time > 9) ? time : "0" + time;
}

function updateClocks() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    digitalClock.innerHTML = completeTime(hours) + ":" + completeTime(minutes) + ":" + completeTime(seconds);

    secondPointer.style.transform = `rotate(${(seconds * 6) - 90}deg)`;
    minutePointer.style.transform = `rotate(${(minutes * 6) - 90}deg)`;
    hourPointer.style.transform = `rotate(${((hours * 30) - 90) + minutes / 2}deg)`;
}

updateClocks();
setInterval(updateClocks, 1000);