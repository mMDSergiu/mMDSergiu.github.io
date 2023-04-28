const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const elements = document.querySelectorAll('.lang-element');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

dropdownContent.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    const lang = event.target.dataset.lang;
    elements.forEach(el => {
      if (el.classList.contains(lang)) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
    dropdownBtn.textContent = event.target.textContent;
    dropdownContent.classList.remove('show');
  }
});
