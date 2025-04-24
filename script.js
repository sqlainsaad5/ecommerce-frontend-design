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