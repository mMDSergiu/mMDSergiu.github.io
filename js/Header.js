const isHome = document.getElementById('header').getAttribute('data-page') === 'home';
const mainUrl = isHome ? '' : '../Index.html';

const isHome1 = document.getElementById('header').getAttribute('data-page') === 'home';
const mainUrl1 = isHome ? '' : '.';

const isHome2 = document.getElementById('header').getAttribute('data-page') === 'home';
const mainUrl2 = isHome ? '' : '.';

document.getElementById('header').innerHTML = `  
<input type="checkbox" aria-label="Toggle menu"/>
<span></span>
<span></span>
<span></span>


<a href="https://www.instagram.com/neonlux_shop/" target="_blank" class="meniu-logo">
  <img src="./img/Pozele Home/Logo/Psite-01.png" alt="NeonLux">
</a>


<div class="meniu">
  <ul>
 
    <li>
    <a href="${mainUrl}#AnchorNoi">Despre Noi</a>
    </li>
    <li>
      <a href="${mainUrl}#AnchorGlarie">Galerie</a>
    </li>
    <li>
      <a href="${mainUrl}#AnchorProduse">Produse</a>
    </li>
    <li>
      <a href="${mainUrl}#AnchorContact">Contact</a>
    </li>

  </ul>
  <ul>
    <li>
      <a href="${mainUrl1}./pages/Register.html" >
        Creare Cont
      </a>
    </li>
    <li>
      <a href="${mainUrl2}./pages/Login.html" >
        Logare
      </a>
    </li>

  </ul>
</div>`;

