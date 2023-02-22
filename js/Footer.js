document.getElementById('footer1').innerHTML = `  
<div class="footer-content">

            <h3>Neon Lux</h3>

            <p>Suntem o pată de culoare într-o lume ce tinde tot mai mult spre monocrom. Împreună putem adăuga mici
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

            <p>Copyright &copy <span id="year"></span> <a href="https://www.instagram.com/neonlux_shop/" target="_blank">@neonlux_shop</a> </p>

            <div class="footer-menu">

              <ul class="f-menu">

                <li><a href="#AnchorNoi">DespreNoi</a></li>

                <li><a href="#AnchorGlarie">Galerie</a></li>

                <li><a href="#AnchorProduse">Produse</a></li>

                <li><a href="#AnchorContact">Contact</a></li>

              </ul>

            </div>

          </div>
`;

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();