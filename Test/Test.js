let language = 'romanian'; // Limba deffault

function setLanguage(lang) {
  language = lang;
  updateLanguage();
}

function updateLanguage() {
  const titles = {
    'romanian': 'Bun venit pe Website!',
    'english': 'Welcome to the Website!',
    'russian': 'Добро пожаловать на мой сайтДобро пожаловать на сайт!'
  };
  const descriptions = {
    'romanian': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    'english': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. d they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary',
    'russian': 'я должен объяснить вам, как родилась вся эта ошибочная идея осуждения удовольствия и восхваления боли, и я дам вам полный отчет о системе и изложу подлинные учения великого исследователя истины, мастера-строителя. человеческого счастья. Никто не отвергает,.'
  };
  const spanss = {
    'romanian': '!!!!!!!!!!!!!!!!!!!!!!',
    'english': '()))))))))))))))))))))(',
    'russian': '}}}}}}}}}}}}}{}}}}}}}}}}}}'
  };
  
  document.getElementById('title').textContent = titles[language];
  document.getElementById('description').textContent = descriptions[language];
  document.getElementById('span1').textContent = spans[language];
}



const toggleBtn = document.querySelector('.toggle-btn');
const body = document.querySelector('body');
const box = document.querySelector('.box');
const title = document.querySelector('h1');

toggleBtn.addEventListener('click', function() {
  body.classList.toggle('light-mode');
  box.classList.toggle('light-mode');
  toggleBtn.classList.toggle('active');
  title.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    body.style.backgroundColor = '#f5f5f5';
  } else {
    body.style.backgroundColor = '#1f1f1f';
  }
});

