const isHome = document.getElementById('header').getAttribute('data-page') === 'home';
const mainUrl = isHome ? '' : './../Index.html';

const isHome1 = document.getElementById('header').getAttribute('data-page') === 'home';
const mainUrl1 = isHome ? '' : '.';






document.getElementById('header').innerHTML = `  

<nav class="navbar">
<div class="content">
  <div class="logo">
    <a href="${mainUrl}#AnchorTop"><span style="font-family: 'Shadow'; font-size: 40px;">NE<span class="fa fa-lightbulb-o" style="font-size:25px; margin-left: 5px; margin-right: 5px"></span>N</span><span style="font-family: 'Rubik'; font-size: 20px; margin-left: 8px;">Lux</span></a>
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
    <a href="${mainUrl}#AnchorGlarie" class="lang-element ro">Galerie</a>
    <a href="${mainUrl}#AnchorGlarie" class="lang-element en" style="display: none;">Gallery</a>
    <a href="${mainUrl}#AnchorGlarie" class="lang-element ru" style="display: none;">Галерея</a>
    </li>
    <li>
    <a href="${mainUrl}#AnchorProduse" class="lang-element ro">Produse</a>
    <a href="${mainUrl}#AnchorProduse" class="lang-element en" style="display: none;">Products</a>
    <a href="${mainUrl}#AnchorProduse" class="lang-element ru" style="display: none;">Продукты</a>
    </li>
    <li>
    <div id="dropdown3" class="dropdown3">
    <a class="lang-element ro">Mai Mult</a>
    <a class="lang-element en" style="display: none;">More</a>
    <a class="lang-element ru" style="display: none;">более</a>
    <div id="dropdown-content2" class="dropdown-content2">
    <a class="links" href="${mainUrl}#AnchorContact">
    <span class="lang-element ro">Contact</span>
    <span class="lang-element en" style="display: none;">Contact</span>
    <span class="lang-element ru" style="display: none;">Контакт</span>
    </a>
    <a class="links" href="${mainUrl}#AnchorFAQ"><span>FAQ</span></a>
    <a class="links" href="${mainUrl}#AnchorRecenzii">
    <span class="lang-element ro">Recenzii</span>
    <span class="lang-element en" style="display: none;">Reviews</span>
    <span class="lang-element ru" style="display: none;">Отзывы</span>
    </a>
    </div>
  </div>

    </li>
    

    <span class="log-site"><li>
    <a href="${mainUrl1}./pages/Register.html" class="lang-element ro">Creare Cont</a>
    <a href="${mainUrl1}./pages/Register.html" class="lang-element en" style="display: none;">Create Account</a>
    <a href="${mainUrl1}./pages/Register.html" class="lang-element ru" style="display: none;">Зарегистрироваться</a>
    </li></span>
    <span class="log-site"><li>
    <a href="${mainUrl1}./pages/Login.html" class="lang-element ro"">Logare</a>
    <a href="${mainUrl1}./pages/Login.html" class="lang-element en" display: none;">Log In</a>
    <a href="${mainUrl1}./pages/Login.html" class="lang-element ru" display: none;">Вход</a>
    </li></span>
 
    </ul>

    

    
    <ul class="log">
    <li>
    <div class="language-dropdown">
    <button class="dropdown-btn">
      <span>RO   <i class="fa fa-chevron-down style="font-size:10px;"></i></span>
      <span class="glyphicon glyphicon-chevron-down"></span>
    </button>
    <div class="dropdown-content">
      <a href="#" data-lang="ro">RO</a>
      <a href="#" data-lang="en">ENG</a>
      <a href="#" data-lang="ru">RU</a>
    </div>
  </div>
  </li>

  <li>
    <img src="${mainUrl1}./img/Special/BulbOff.png" id="icon-bulb">
    </li>

</ul>

<ul class="log1">
<li>
<div class="icon menu-btn">
<i class="fas fa-bars"></i>
</div>
</li>
</ul>



</div>
</nav>
<div class="banner"></div>
</div>
`;

var icon = document.getElementById("icon-bulb");
icon.onclick = function () {  
  document.body.classList.toggle("white-theme");
  if (document.body.classList.contains("white-theme")) {
    icon.src = `${mainUrl1}./img/Special/BulbOn.png`;
  } else {
    icon.src = `${mainUrl1}./img/Special/BulbOff.png`;
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



var element = document.getElementById("dropdown3");

element.addEventListener("click", function() {
  element.classList.toggle("clicked");
});
