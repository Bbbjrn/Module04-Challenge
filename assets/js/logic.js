// Select the toggle button
const toggleButton = document.querySelector('#toggle');

// Select the circle element if any (make sure to update this if circle is used)
const circle = document.querySelector('.circle');

// Get the saved mode from local storage
const savedMode = localStorage.getItem('mode');

// Set the initial mode based on the saved mode or default to 'light'
let mode = savedMode || 'light';

// Apply the initial mode
applyMode();

// Add an event listener to the toggle button
toggleButton.addEventListener('click', toggleMode);

// Function to toggle the mode
function toggleMode() {
  mode = mode === 'light' ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
  applyMode();
}

// Function to apply the current mode
function applyMode() {
  document.body.classList.toggle('dark', mode === 'dark');
  if (circle) {
    circle.classList.toggle('dark', mode === 'dark');
  }
}
