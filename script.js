const countdownDisplay = document.getElementById('countdown');
const targetDate = new Date('April 19, 2025 16:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownDisplay.innerHTML = '¡La fiesta ha comenzado!';
    }
};

setInterval(updateCountdown, 1000);
