let language = 'romanian';

function setLanguage(lang) {
  language = lang;
  updateLanguage();
}

function updateLanguage() {
  const titles =  {
    'romanian': 'Bun venit la NeonLux!',
    'english': 'Welcome to <span style="color: rgb(0, 153, 229);">Neon</span><span style="color: #FF5733;">Lux</span>!',
    'russian': 'Добро пожаловать b <span style="color: rgb(0, 153, 229);">Neon</span><span style="color: #FF5733;">Lux</span>!'
  };
  const descriptions = {
    'romanian': 'Acesta este site-ul meu minunat.',
    'english': 'This is my wonderful website.',
    'russian': 'Это мой замечательный сайт.'
  };
  
  document.getElementById('titlefirst').textContent = titles[language];
  document.getElementById('description').textContent = descriptions[language];
}