const isHomeFooter = document.getElementById('footer1').getAttribute('data-page') === 'home1';
const mainUrlFooter = isHomeFooter ? '' : '../Index.html';



document.getElementById('footer1').innerHTML = `  

<div class="footer-content">

<h3><span style="font-family: 'Shadow'; font-size: 40px;">NE<span class="fa fa-lightbulb-o" style="font-size:25px; margin-left: 5px; margin-right: 5px"></span>N</span><span style="font-family: 'Rubik'; font-size: 20px; margin-left: 8px;">Lux</span></h3>

            <p class="lang-element ro">Suntem o pată de culoare într-o lume ce tinde tot mai mult spre monocrom. Împreună putem adăuga mici
              stropi de culoare în birouri, camere dar chiar și în suflete și vise, alături de un mic simbol al unei
              amintiri sau experiențe plăcute.</p>

              <p class="lang-element en" style="display: none;">We are a splash of color in a world that tends more and more towards monochrome. Together we can add small splashes of color in offices,
               rooms but even in souls and dreams, along with a small symbol of a pleasant memory or experience.</p>

              <p class="lang-element ru" style="display: none;">Мы — всплеск цвета в мире, который все больше и больше стремится к монохромности. Вместе мы можем добавить небольшие всплески цвета в офисы,
               комнаты и даже в души и мечты вместе с небольшим символом приятного воспоминания или опыта.</p>

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

                <li>
                <a href="${mainUrl}#AnchorNoi" class="lang-element ro">DespreNoi</a>
                <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none;">About Us</a>
                <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none;">О Hас</a>
                </li>

                <li>
                <a href="${mainUrl}#AnchorGlarie" class="lang-element ro">Galerie</a>
                <a href="${mainUrl}#AnchorGlarie" class="lang-element en" style="display: none;">Gallery</a>
                <a href="${mainUrl}#AnchorGlarie" class="lang-element ru" style="display: none;">Галерея</a>
                </li>

                <li>
                <a href="${mainUrl}#AnchorGlarie" class="lang-element ro">Produse</a>
                <a href="${mainUrl}#AnchorGlarie" class="lang-element en" style="display: none;">Products</a>
                <a href="${mainUrl}#AnchorGlarie" class="lang-element ru" style="display: none;">Продукты</a>
                </li>

                <li>
                <a href="${mainUrl}#AnchorGlarie" class="lang-element ro">Contact</a>
                <a href="${mainUrl}#AnchorGlarie" class="lang-element en" style="display: none;">Contact</a>
                <a href="${mainUrl}#AnchorGlarie" class="lang-element ru" style="display: none;">Контакт</a>
                </li>
              </ul>

            </div>

          </div>
          
   
`;


const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
