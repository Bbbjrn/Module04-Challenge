//TODO: Select the toggle button
const toggleButton = document.querySelector('#toggle');

//TODO: Select the circle element if any (make sure to update this if circle is used)
const circle = document.querySelector('.circle');

//TODO: Get the saved mode from local storage
const savedMode = localStorage.getItem('mode');

//TODO: Set the initial mode based on the saved mode or default to 'light'
let mode = savedMode || 'light';

//TODO: Apply the initial mode
applyMode();

//TODO: Add an event listener to the toggle button
toggleButton.addEventListener('click', toggleMode);

//TODO: Function to toggle the mode
function toggleMode() {
  mode = mode === 'light' ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
  applyMode();
}

//TODO: Function to apply the current mode
function applyMode() {
  document.body.classList.toggle('dark', mode === 'dark');
  if (circle) {
    circle.classList.toggle('dark', mode === 'dark');
  }
}
