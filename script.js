// Simple toggle behaviour for flyouts (click to open, click outside to close)
document.addEventListener('click', (e) => {
  const isBtn = e.target.closest('.menu-btn');
  const openItems = document.querySelectorAll('.flyout');
  if (isBtn) {
    const parent = isBtn.closest('.menu-item');
    const target = parent.querySelector('.flyout');
    const shown = target.style.display === 'flex';
    openItems.forEach(f => f.style.display = 'none');
    target.style.display = shown ? 'none' : 'flex';
    return;
  }
  // click outside -> close
  if (!e.target.closest('.menu-item')) {
    openItems.forEach(f => f.style.display = 'none');
  }
});

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.flyout').forEach(f => f.style.display = 'none');
  }
});
