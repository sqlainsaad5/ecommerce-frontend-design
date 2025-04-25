const minRange = document.getElementById('min-range');
  const maxRange = document.getElementById('max-range');
  const minInput = document.getElementById('min-input');
  const maxInput = document.getElementById('max-input');
  const track = document.querySelector('.slider-track');
  const maxValue = 999999;

  function setTrackFill(min, max) {
    const left = (min / maxValue) * 100;
    const right = 100 - (max / maxValue) * 100;
    track.style.left = left + '%';
    track.style.right = right + '%';
  }

  function syncFromSlider() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);
    if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];
    minInput.value = minVal;
    maxInput.value = maxVal;
    minRange.value = minVal;
    maxRange.value = maxVal;
    setTrackFill(minVal, maxVal);
  }

  function syncFromInputs() {
    let minVal = parseInt(minInput.value) || 0;
    let maxVal = parseInt(maxInput.value) || maxValue;
    if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];
    minRange.value = minVal;
    maxRange.value = maxVal;
    setTrackFill(minVal, maxVal);
  }

  minRange.addEventListener('input', syncFromSlider);
  maxRange.addEventListener('input', syncFromSlider);
  minInput.addEventListener('input', syncFromInputs);
  maxInput.addEventListener('input', syncFromInputs);

  document.getElementById('apply-btn').addEventListener('click', () => {
    alert("Min: " + minInput.value + ", Max: " + maxInput.value);
  });

  function toggleFilter(titleElement) {
    const list = titleElement.nextElementSibling;
    list.classList.toggle('collapsed');
  }

  syncFromSlider();


  // ⏳ Countdown Timer Script
document.addEventListener('DOMContentLoaded', () => {
  const targetDate = new Date("2025-04-25T00:00:00").getTime(); // Set your deadline

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("minutes");
  const secsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minsEl.textContent = "00";
      secsEl.textContent = "00";
      clearInterval(interval);
      return;
    }

    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minsEl.textContent = minutes;
    secsEl.textContent = seconds;
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
});

document.addEventListener("DOMContentLoaded", function () {
  const gridBtn = document.getElementById("gridView");
  const listBtn = document.getElementById("listView");

  gridBtn.addEventListener("click", () => {
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  listBtn.addEventListener("click", () => {
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  });
});

const wishlistBtn = document.getElementById('wishlistBtn');

wishlistBtn.addEventListener('click', () => {
  wishlistBtn.classList.toggle('added');

  if (wishlistBtn.classList.contains('added')) {
    wishlistBtn.innerHTML = '❤️';
  } else {
    wishlistBtn.innerHTML = '🤍';
  }
});
