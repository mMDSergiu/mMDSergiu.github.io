const isHomeFooter = document.getElementById('footer1').getAttribute('data-page') === 'home1';
const mainUrlFooter = isHomeFooter ? '' : '../Index.html';



document.getElementById('footer1').innerHTML = `  

<div class="footer-content">

            <h3>Neon Lux</h3>

            <p class="lang-element ro">Suntem o pată de culoare într-o lume ce tinde tot mai mult spre monocrom. Împreună putem adăuga mici
              stropi de culoare în birouri, camere dar chiar și în suflete și vise, alături de un mic simbol al unei
              amintiri sau experiențe plăcute.</p>

              <p class="lang-element en" style="display: none;">We are a splash of color in a world that tends more and more towards monochrome. Together we can add small splashes of color in offices,
               rooms but even in souls and dreams, along with a small symbol of a pleasant memory or experience.</p>

              <p class="lang-element ru" style="display: none;">Suntem o pată de culoare într-o lume ce tinde tot mai mult spre monocrom. Împreună putem adăuga mici
              stropi de culoare în birouri, camere dar chiar și în suflete și vise, alături de un mic simbol al unei
              amintiri sau experiențe plăcute.</p>

            <ul class="socials">

              <li><a href="https://www.instagram.com/neonlux_shop/" target="_blank"><i class="fa fa-instagram"></i></a>
              </li>

              <li><a href="https://www.facebook.com/neonlux.shop" target="_blank"><i class="fa fa-facebook"></i></a>
              </li>

              <li><a href="https://web.telegram.org/z/#5908971290" target="_blank"><i class="fa fa-telegram"></i></a>
              </li>

              <li><a href="mailto:neonlux.manager@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a></li>


            </ul>

          </div>

          <div class="footer-bottom">

            <p>Copyright &copy <span id="year"></span> <a href="https://www.instagram.com/sergiu.catanoi/" target="_blank">Sergiu Cătănoi</a><a href="https://www.instagram.com/harisangc/" target="_blank"> & Haris Sarmaniuc</a> </p>

            <div class="footer-menu">

              <ul class="f-menu">

                <li><a href="${mainUrl}#AnchorNoi">DespreNoi</a></li>

                <li><a href="${mainUrl}#AnchorGlarie">Galerie</a></li>

                <li><a href="${mainUrl}#AnchorProduse">Produse</a></li>

                <li><a href="${mainUrl}#AnchorContact">Contact</a></li>

              </ul>

            </div>

          </div>
   
`;


const year = document.getElementById("year");
year.textContent = new Date().getFullYear();