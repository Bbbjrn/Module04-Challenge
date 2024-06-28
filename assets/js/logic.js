// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// Get the toggle button element
const toggleButton = document.querySelector('#toggle');

// Get  circle element
const circle = document.querySelector('.circle');

// Check if  mode is already saved in local storage
const savedMode = localStorage.getItem('mode');

// Set initial mode based on the saved mode or default to 'light'
let mode = savedMode || 'light';

// Apply initial mode to the page and circle
applyMode();

// Add event listener to the toggle button
toggleButton.addEventListener('click', toggleMode);

// Function to toggle the mode
function toggleMode() {
    // Toggle the mode between 'light' and 'dark'
    mode = mode === 'light' ? 'dark' : 'light';

    // Save the mode to local storage
    localStorage.setItem('mode', mode);

    // Apply the updated mode to the page and circle
    applyMode();
}

// Function to apply the current mode to the page and circle
function applyMode() {
    // Toggle the 'dark' class on the body element based on the mode
    document.body.classList.toggle('dark', mode === 'dark');

    // Toggle the 'dark' class on the circle element based on the mode
    circle.classList.toggle('dark', mode === 'dark');
}

// TODO: Create functions to read and write from local storage
// Function to write data to local storage
function writeToLocalStorage(key, data) {
    localStorage
        .setItem(key, JSON.stringify(data));
}

// Function to read data from local storage
function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
 