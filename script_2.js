document.addEventListener('DOMContentLoaded', () => {
const navbarLinks = document.querySelectorAll('.navbar ul li a');
const sections = document.querySelectorAll('.content-section');
const settingsToggle = document.getElementById('settings-toggle');
const settingsMenu = document.getElementById('settings-menu');
const themeButtons = document.querySelectorAll('.theme-btn');
const contactForm = document.getElementById('contact-form');
// Handle section navigation
navbarLinks.forEach(link => {
link.addEventListener('click', (event) => {
event.preventDefault();
const target = event.target.getAttribute('data-target');
navbarLinks.forEach(a => a.classList.remove('active'));
link.classList.add('active');
sections.forEach(section => {
section.classList.add('hidden');
if (section.id === target) {
section.classList.remove('hidden');
}
});
});
});
// Toggle settings menu
settingsToggle.addEventListener('click', () => {
settingsMenu.classList.toggle('hidden');
});
// Close settings menu when clicking outside
document.addEventListener('click', (event) => {
if (!settingsToggle.contains(event.target) && !settingsMenu.contains(event.target)) {
settingsMenu.classList.add('hidden');
}
});
// Theme change functionality
themeButtons.forEach(button => {
button.addEventListener('click', (event) => {
const theme = event.target.getAttribute('data-theme');
document.documentElement.setAttribute('data-theme', theme);
});
});
// Form validation
contactForm.addEventListener('submit', (event) => {
event.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
if (!name || !email || !message) {
alert('Please fill in all fields.');
return;
}
if (!validateEmail(email)) {
alert('Please enter a valid email address.');
return;
}
alert('Form submitted successfully!');
contactForm.reset();
});
// Email validation function
function validateEmail(email) {
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(email);
}
});