// Set your target countdown date (YYYY-MM-DD HH:MM:SS)
const targetDate = new Date("2025-04-25T00:00:00").getTime();

const timerElements = document.querySelectorAll('.timer div');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    timerElements.forEach(el => {
      el.querySelector('span').textContent = "00";
    });
    clearInterval(timerInterval);
    return;
  }

  const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  const mins = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const secs = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

  timerElements[0].querySelector('span').textContent = days;
  timerElements[1].querySelector('span').textContent = hours;
  timerElements[2].querySelector('span').textContent = mins;
  timerElements[3].querySelector('span').textContent = secs;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // initial call
