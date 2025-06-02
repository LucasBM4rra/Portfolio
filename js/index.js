const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

function setTheme(theme) {
  body.className = theme;
  toggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
  localStorage.setItem('theme', theme);
}

toggleBtn.addEventListener('click', () => {
  const current = body.classList.contains('light') ? 'light' : 'dark';
  setTheme(current === 'light' ? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if (saved) setTheme(saved);
});


