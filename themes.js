document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('style-toggle');
  if (!toggleButton) return;

  const body = document.body;
  const label = toggleButton.querySelector('.toggle-label');
  const DARK_CLASS = 'dark-mode';

  function applyTheme(isDark) {
    body.classList.toggle(DARK_CLASS, isDark);
    toggleButton.setAttribute('aria-checked', isDark);
    label.textContent = isDark ? 'Light mode' : 'Dark mode';
  }

  function toggleTheme() {
    const isDark = !body.classList.contains(DARK_CLASS);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyTheme(isDark);
  }

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

  toggleButton.addEventListener('click', toggleTheme);
});
