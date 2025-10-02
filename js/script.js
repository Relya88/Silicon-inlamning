const darkmodeSwitch = document.querySelector('#darkmode-switch');

disableDarkMode();

darkmodeSwitch?.addEventListener('change', () => {
  if (darkmodeSwitch.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function updateThemeImages(isDark) {
  document.querySelectorAll('img[data-light][data-dark]').forEach(img => {
    const next = isDark ? img.getAttribute('data-dark') : img.getAttribute('data-light');
    if (next && img.getAttribute('src') !== next) {
      img.setAttribute('src', next);
    }
  });
}

function enableDarkMode() {
  if (darkmodeSwitch) darkmodeSwitch.checked = true;
  document.documentElement.classList.add('dark');
  updateThemeImages(true);
}
function disableDarkMode() {
  if (darkmodeSwitch) darkmodeSwitch.checked = false;
  document.documentElement.classList.remove('dark');
  updateThemeImages(false);
}

/* faq delen */
document.addEventListener('click', (e) => {
  const summary = e.target.closest('.faq-item > summary');
  if (!summary) return;
  requestAnimationFrame(() => {
    const current = summary.parentElement;
    if (!current.open) return;
    document.querySelectorAll('.faq-item[open]').forEach(d => {
      if (d !== current) d.open = false;
    });
  });
});
