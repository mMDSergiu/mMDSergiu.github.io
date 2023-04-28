const isHome = document.getElementById('header').getAttribute('data-page') === 'home';
const mainUrl = isHome ? '' : './../Index.html';

const isHome1 = document.getElementById('header').getAttribute('data-page') === 'home';
const mainUrl1 = isHome ? '' : '.';






document.getElementById('header').innerHTML = `  

<nav class="navbar">
<div class="content">
  <div class="logo">
    <a href="${mainUrl}#AnchorTop">NeonLux</a>
  </div>
  <ul class="menu-list">
    <div class="icon cancel-btn">
      <i class="fas fa-times"></i>
    </div>
    <li>
    <a href="${mainUrl}#AnchorNoi" class="lang-element ro">Despre Noi</a>
    <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none;">About Us</a>
    <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none;">О Hас</a>
    </li>
    <li>
    <a href="${mainUrl}#AnchorNoi" class="lang-element ro">Galerie</a>
    <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none;">Gallery</a>
    <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none;">Галерея</a>
    </li>
    <li>
    <a href="${mainUrl}#AnchorNoi" class="lang-element ro">Produse</a>
    <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none;">Products</a>
    <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none;">Продукты</a>
    </li>
    <li>
    <a href="${mainUrl}#AnchorNoi" class="lang-element ro">Contact</a>
    <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none;">Contact</a>
    <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none;">Контакт</a>
    </li>

    <span class="log-site"><li>
    <a href="${mainUrl1}./pages/Register.html" class="lang-element ro">Creare Cont</a>
    <a href="${mainUrl1}./pages/Register.html" class="lang-element en" style="display: none;">Create Account</a>
    <a href="${mainUrl1}./pages/Register.html" class="lang-element ru" style="display: none;">Зарегистрироваться</a>
    </li></span>
    <span class="log-site"><li>
    <a href="${mainUrl1}./pages/Login.html" class="lang-element ro" style="margin-right: 0px;">Logare</a>
    <a href="${mainUrl1}./pages/Login.html" class="lang-element en" style="margin-right: 0px; display: none;">Log In</a>
    <a href="${mainUrl1}./pages/Login.html" class="lang-element ru" style="margin-right: 0px; display: none;">Вход</a>
    </li></span>
 
    </ul>
    
    <div class="language-dropdown">
    <button class="dropdown-btn">
      RO
      <span class="glyphicon glyphicon-chevron-down"></span>
    </button>
    <div class="dropdown-content">
      <a href="#" data-lang="ro">RO</a>
      <a href="#" data-lang="en">ENG</a>
      <a href="#" data-lang="ru">RU</a>
    </div>
  </div>
  
    <img  src="./img/Special/BulbOff.png" id="icon-bulb">
  <div class="icon menu-btn">
    <i class="fas fa-bars"></i>
  </div>

</div>
</nav>
<div class="banner"></div>
</div>
`;

var icon = document.getElementById("icon-bulb");
icon.onclick = function () {  
  document.body.classList.toggle("white-theme");
  if (document.body.classList.contains("white-theme")) {
    icon.src = "./img/Special/BulbOn.png";
  } else {
    icon.src = "./img/Special/BulbOff.png";
  }
}
//  ASdasda

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}



// Da doamne 

const dropdownBtn = document.querySelector('.dropdown-btn');
        const dropdownContent = document.querySelector('.dropdown-content');
        const elements = document.querySelectorAll('.lang-element');
        
        dropdownBtn.addEventListener('click', function() {
          dropdownContent.classList.toggle('show');
        });
        
        dropdownContent.addEventListener('click', function(event) {
          if (event.target.tagName === 'A') {
            const lang = event.target.dataset.lang;
            elements.forEach(function(el) {
              if (el.classList.contains(lang)) {
                el.style.display = 'block';
              } else {
                el.style.display = 'none';
              }
            });
            dropdownBtn.textContent = event.target.textContent;
            dropdownContent.classList.remove('show');
            dropdownContent.querySelectorAll('a').forEach(function(link) {
              link.classList.remove('active');
              if (link.dataset.lang === lang) {
                link.classList.add('active');
              }
            });
          }
        });
        