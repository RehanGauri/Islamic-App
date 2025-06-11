// Toggle dark mode
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Change icon
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        
        // Save preference to localStorage
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Menu button functionality
document.querySelector('.menu-btn')?.addEventListener('click', () => {
    alert('Menu will open here');
});

// Profile picture click
document.querySelector('.profile-pic')?.addEventListener('click', () => {
    alert('Profile section will open here');
});