// get all language buttons
const languageBtns = document.querySelectorAll('.language-btn');

// add event listener to each button
languageBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // remove active class from all buttons
    languageBtns.forEach(b => b.classList.remove('active'));
    // add active class to the clicked button
    btn.classList.add('active');
    // get the selected language
    const lang = btn.getAttribute('data-lang');
    // show the elements for the selected language and hide the others
    document.querySelectorAll(`.${lang}`).forEach(el => el.style.display = 'block');
    document.querySelectorAll(`:not(.${lang})`).forEach(el => el.style.display = 'none');
  });
});
