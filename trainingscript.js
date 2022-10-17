const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 200);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds =  seconds < 2 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}