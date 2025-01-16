const body = document.body
const themeToggle = document.getElementById('themeToggle')

themeToggle.addEventListener('click', function () {
    const isDarkMode = body.classList.contains('bg-dark')

    if (isDarkMode) {
        body.classList.replace('bg-dark', 'bg-white')
        body.classList.replace('text-white', 'text-dark')
        themeToggle.classList.replace('bi-moon-stars-fill', 'bi-sun-fill')
        themeToggle.classList.replace('dark-mode', 'white-mode')
    } else {
        body.classList.replace('bg-white', 'bg-dark')
        body.classList.replace('text-dark', 'text-white')
        themeToggle.classList.replace('bi-sun-fill', 'bi-moon-stars-fill')
        themeToggle.classList.replace('white-mode', 'dark-mode')
    }
})