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
    <li><a href="${mainUrl}#AnchorNoi">Despre Noi</a></li>
    <li><a href="${mainUrl}#AnchorGlarie">Galerie</a></li>
    <li><a href="${mainUrl}#AnchorProduse">Produse</a></li>
    <li><a href="${mainUrl}#AnchorContact">Contact</a></li>

    <span class="log-site"><li><a href="${mainUrl1}./pages/Register.html">Creare Cont</a></li></span>
    <span class="log-site"><li><a href="${mainUrl1}./pages/Login.html" style="margin-right: 0px;">Logare</a></li></span>
 
    </ul>
    <img src="./img/Special/BulbOn.png" id="icon">
  <div class="icon menu-btn">
    <i class="fas fa-bars"></i>
  </div>

</div>
</nav>
<div class="banner"></div>
</div>
`;


const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}