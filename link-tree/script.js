const toggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    bodyElement.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');

if (bodyElement.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
}
});