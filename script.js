const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => bar.classList.toggle('active'));
});

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    // Collapse all
    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-content').style.display = 'none';
    });

    // Expand selected if not already active
    if (!isActive) {
      item.classList.add('active');
      item.querySelector('.accordion-content').style.display = 'block';
    }
  });
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const cases = document.querySelectorAll('.case-study');

  cases.forEach(item => {
    const header = item.querySelector('.case-header');

    header.addEventListener('click', () => {
      // Optional: Close others
      cases.forEach(el => {
        if (el !== item) el.classList.remove('active');
      });

      item.classList.toggle('active');
    });
  });
});