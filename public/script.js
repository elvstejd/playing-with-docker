const hourSpan = document.getElementById('hour');
const minuteSpan = document.getElementById('minute');
const secondSpan = document.getElementById('second');

function padZero(number) {
    return number < 10 ? ('0' + number) : number;
}

function getTime() {
    const today = new Date();
    return {
        hour: padZero(today.getHours()),
        minute: padZero(today.getMinutes()),
        second: padZero(today.getSeconds()),
    }
}

function update() {
    const { hour, minute, second } = getTime();
    hourSpan.innerText = hour;
    minuteSpan.innerText = minute;
    secondSpan.innerText = second;
}

function init() {
    setInterval(update, 1000);
}

window.addEventListener('DOMContentLoaded', init);

console.log('hey we live');
