function updateTime() {
    const endDate = new Date("December 19, 2029 00:00:00");
    const now = new Date();
    const diff = endDate - now;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateTime();
setInterval(updateTime, 1000);