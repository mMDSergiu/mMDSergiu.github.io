const isHome = document.getElementById('header').getAttribute('data-page') === 'home';
const mainUrl = isHome ? '' : './../Index.html';

const isHome1 = document.getElementById('header').getAttribute('data-page') === 'home';
const mainUrl1 = isHome ? '' : '.';






document.getElementById('header').innerHTML = `  
<div class="container-header">
<nav class="nav1">
<img src="./img/logo/logo-01.png" class="logo">
<ul class="prim-header">
    <li><a><p class="mini-text">Email:</p><br><span class="fa fa-envelope" style="margin-right: 5px; font-size: 17px;"></span>s_rudoi@yahoo.com</a></li>
    <li><a><p class="mini-text">
    <span class="lang-element ro" user-select: none;">Coordonator:</span>
    <span class="lang-element en" style="display: none; user-select: none;">Coordinator:</span>
    <span class="lang-element ru" style="display: none; user-select: none;">Координатор:</span>
    </p><br><span class="fa fa-phone" style="margin-right: 5px; font-size: 17px;"></span>+(373)699 95 939</a></li>

    </ul>
    </nav>
</div>

<div id="div2">
    <nav class="navbar">
    <div class="content">
      
      <ul class="menu-list">
      <li>
      <a href="${mainUrl}#AnchorNoi" class="lang-element ro" style="margin-right: 15px;">Noutăți</a>
      <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none; margin-right: 15px;">News</a>
      <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none; margin-right: 15px;">Новости</a>
      </li>
      <span class="log-site"><li>
        <div id="dropdown3" class="dropdown3">
            <a class="lang-element ro" style="user-select: none;" >Despre Noi  <p class="material-icons">expand_more</p></a>
            <a class="lang-element en" style="display: none; user-select: none;">About Us   <p class="material-icons">expand_more</p></a>
            <a class="lang-element ru" style="display: none; user-select: none;">О нас   <p class="material-icons">expand_more</p></a>
            <div id="dropdown-content2" class="dropdown-content2">
                <a class="links" href="${mainUrl}#AnchorRecenzii">
                <span class="lang-element ro">Întrebări Frecvente</span>
                <span class="lang-element en" style="display: none;">Frequent questions</span>
                <span class="lang-element ru" style="display: none;">Частые вопросы</span>
                </a>
            <a class="links" href="${mainUrl}#AnchorContact">
            <span class="lang-element ro">Sondaje</span>
            <span class="lang-element en" style="display: none;">Polls</span>
            <span class="lang-element ru" style="display: none;">Сондахе</span>
            </a>
            <a class="links" href="${mainUrl}#AnchorFAQ">
            <span class="lang-element ro">Chestionare</span>
            <span class="lang-element en" style="display: none;">Questionnaires</span>
            <span class="lang-element ru" style="display: none;">Aнкеты</span>
            </a>
            </div>
          </div>
        </li></span>


        <span class="log-site"><li>
            <div id="dropdown3" class="dropdown3">
                <a class="lang-element ro" style="user-select: none;" >Învățământ  <p class="material-icons">expand_more</p></a>
                <a class="lang-element en" style="display: none; user-select: none;">Education   <p class="material-icons">expand_more</p></a>
                <a class="lang-element ru" style="display: none; user-select: none;">О нас   <p class="material-icons">expand_more</p></a>
                <div id="dropdown-content2" class="dropdown-content2">
                    <a class="links" href="${mainUrl}#AnchorRecenzii">
                    <span class="lang-element ro">Materiale Didactice</span>
                    <span class="lang-element en" style="display: none;">Didactic Materials</span>
                    <span class="lang-element ru" style="display: none;">Дидактические Mатериалы</span>
                    </a>
                <a class="links" href="${mainUrl}#AnchorContact">
                <span class="lang-element ro">Rutina</span>
                <span class="lang-element en" style="display: none;">Routine</span>
                <span class="lang-element ru" style="display: none;">Рутина</span>
                </a>
                <a class="links" href="${mainUrl}#AnchorFAQ">
                <span class="lang-element ro">Tipul și modul studiilor</span>
                <span class="lang-element en" style="display: none;">Type and mode of studies</span>
                <span class="lang-element ru" style="display: none;">Тип и форма обучения</span>
                </a>
                </div>
              </div>
        </li></span>

        <li>
            <a href="${mainUrl}#AnchorNoi" class="lang-element ro">Proiecte</a>
            <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none;">Projects</a>
            <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none;">Проекты</a>
            </li>

            <span class="log-site">
            <li>
                <div id="dropdown3" class="dropdown3">
                <a class="lang-element ro" style="user-select: none;" >Clubul Părinților   <p class="material-icons">expand_more</p></a>
                <a class="lang-element en" style="display: none; user-select: none;">Parents Club   <p class="material-icons">expand_more</p></a>
                <a class="lang-element ru" style="display: none; user-select: none;">Родительский Kлуб   <p class="material-icons">expand_more</p></a>
                <div id="dropdown-content2" class="dropdown-content2">
                <a class="links" href="${mainUrl}#AnchorContact">
                <span class="lang-element ro">Ce este?</span>
                <span class="lang-element en" style="display: none;">What is this?</span>
                <span class="lang-element ru" style="display: none;">Что это?</span>
                </a>
                <a class="links" href="${mainUrl}#AnchorRecenzii">
                <span class="lang-element ro">Fă parte!</span>
                <span class="lang-element en" style="display: none;">Be a part!</span>
                <span class="lang-element ru" style="display: none;">Быть частью этого!</span>
                </a>
                </div>
              </div>
            
                </li>
                </span>
                
        <div class="icon cancel-btn">
          <i class="fas fa-times"></i>
        </div>
 
        <span class="log-site">
    <li>
            <div id="dropdown3" class="dropdown3">
            <a class="lang-element ro" style="user-select: none;" >Adaptări   <p class="material-icons">expand_more</p></a>
            <a class="lang-element en" style="display: none; user-select: none;">Adjustments   <p class="material-icons">expand_more</p></a>
            <a class="lang-element ru" style="display: none; user-select: none;">Aдаптации   <p class="material-icons">expand_more</p></a>
            <div id="dropdown-content2" class="dropdown-content2">
                <a class="links" href="${mainUrl}#AnchorRecenzii">
                <span class="lang-element ro">Materiale Didactice</span>
                <span class="lang-element en" style="display: none;">Didactic Materials</span>
                <span class="lang-element ru" style="display: none;">Дидактические Mатериалы</span>
                </a>
            <a class="links" href="${mainUrl}#AnchorContact">
            <span class="lang-element ro">Camere Speciale</span>
            <span class="lang-element en" style="display: none;">Special Rooms</span>
            <span class="lang-element ru" style="display: none;">Cпециальные Kомнаты</span>
            </a>
            <a class="links" href="${mainUrl}#AnchorFAQ">
            <span class="lang-element ro">Adaptari Liocomotorii</span>
            <span class="lang-element en" style="display: none;">Lyomotor adaptations</span>
            <span class="lang-element ru" style="display: none;">Лиомоторные адаптации</span>
            </a>
            <a class="links" href="${mainUrl}#AnchorRecenzii">
                    <span class="lang-element ro">Echipamente Asestive</span>
                    <span class="lang-element en" style="display: none;">Equipment Assertive</span>
                    <span class="lang-element ru" style="display: none;">Оборудование  Напористый</span>
                    </a>
                    <a class="links" href="${mainUrl}#AnchorContact">
                <span class="lang-element ro">Echipamente Digitale</span>
                <span class="lang-element en" style="display: none;">Digital Equipment</span>
                <span class="lang-element ru" style="display: none;">Оборудование Цифровой</span>
                </a>
            </div>
          </div>
            </li>
    </span>

        <li>
        <a href="${mainUrl}#AnchorNoi" class="lang-element ro">Lumos</a>
        <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none;">Lumos</a>
        <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none;">Lumos</a>
        </li>

        <span class="log-site">
        <li>
        <div id="dropdown3" class="dropdown3">
        <a class="lang-element ro" style="user-select: none;" >Activitati   <p class="material-icons">expand_more</p></a>
        <a class="lang-element en" style="display: none; user-select: none;">Activity   <p class="material-icons">expand_more</p></a>
        <a class="lang-element ru" style="display: none; user-select: none;">Активность   <p class="material-icons">expand_more</p></a>
        <div id="dropdown-content2" class="dropdown-content2">
        <a class="links" href="${mainUrl}#AnchorContact">
        <span class="lang-element ro">Metodice</span>
        <span class="lang-element en" style="display: none;">Methodical</span>
        <span class="lang-element ru" style="display: none;">Методическая</span>
        </a>
        <a class="links" href="${mainUrl}#AnchorRecenzii">
        <span class="lang-element ro">Generale</span>
        <span class="lang-element en" style="display: none;">General</span>
        <span class="lang-element ru" style="display: none;">Генерал</span>
        </a>
        <a class="links" href="${mainUrl}#AnchorRecenzii">
        <span class="lang-element ro">Proiecte</span>
        <span class="lang-element en" style="display: none;">Projects</span>
        <span class="lang-element ru" style="display: none;">Проекты</span>
        </a>
        </div>
      </div>
        </li>
        </span>
        

                <li>
                    <a href="${mainUrl}#AnchorNoi" class="lang-element ro">Galerie</a>
                    <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none;">Gallery</a>
                    <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none;">Галерея</a>
                    </li>
                    <li>
                        <a href="${mainUrl}#AnchorNoi" class="lang-element ro">Echipa</a>
                        <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none;">Team</a>
                        <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none;">Команда</a>
                        </li>
        </ul>
    
        
    
        
        <ul class="log">
        <li class="doamneajuta3">
        <div class="language-dropdown1">
        <button class="dropdown-btn1">
          <span>RO   <i class="fa fa-chevron-down" style="font-size:15px;"></i></span>
          
        </button>
        <div class="dropdown-content1">
          <a href="#" data-lang="ro">RO</a>
          <a href="#" data-lang="en">ENG</a>
          <a href="#" data-lang="ru">RU</a>
        </div>
      </div>
      </li>
    
      <li>
        <img src="${mainUrl1}./img/Special/BulbOff.png" id="icon-bulb1">
        </li>
    
    </ul>
    
    <ul class="log1">
    <li class=doamneajuta>
    <div class="icon menu-btn">
    <i class="fas fa-bars"></i>
    </div>
    </li>
    </ul>
    
    
    
    </div>
    </nav>
    </div>
    
    <div id="div1">
    <nav class="navbar">
    <div class="content">
      
      <ul class="menu-list">
        <div class="icon cancel-btn">
          <i class="fas fa-times"></i>
        </div>
        <li>
        <a href="${mainUrl}#AnchorNoi" class="lang-element ro" style="margin-right: 15px;">Noutăți</a>
        <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none; margin-right: 15px;">News</a>
        <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none; margin-right: 15px;">Новости</a>
        </li>
        <span class="log-site"><li>
            <div id="dropdown3" class="dropdown3">
                <a class="lang-element ro" style="user-select: none;" >Despre Noi  <p class="material-icons">expand_more</p></a>
                <a class="lang-element en" style="display: none; user-select: none;">About Us   <p class="material-icons">expand_more</p></a>
                <a class="lang-element ru" style="display: none; user-select: none;">О нас   <p class="material-icons">expand_more</p></a>
                <div id="dropdown-content2" class="dropdown-content2">
                    <a class="links" href="${mainUrl}#AnchorRecenzii">
                    <span class="lang-element ro">Întrebări Frecvente</span>
                    <span class="lang-element en" style="display: none;">Frequent questions</span>
                    <span class="lang-element ru" style="display: none;">Частые вопросы</span>
                    </a>
                <a class="links" href="${mainUrl}#AnchorContact">
                <span class="lang-element ro">Sondaje</span>
                <span class="lang-element en" style="display: none;">Polls</span>
                <span class="lang-element ru" style="display: none;">Сондахе</span>
                </a>
                <a class="links" href="${mainUrl}#AnchorFAQ">
                <span class="lang-element ro">Chestionare</span>
                <span class="lang-element en" style="display: none;">Questionnaires</span>
                <span class="lang-element ru" style="display: none;">Aнкеты</span>
                </a>
                </div>
              </div>
            </li></span>

            <span class="log-site"><li>
                <div id="dropdown3" class="dropdown3">
                    <a class="lang-element ro" style="user-select: none;" >Învățământ  <p class="material-icons">expand_more</p></a>
                    <a class="lang-element en" style="display: none; user-select: none;">Education   <p class="material-icons">expand_more</p></a>
                    <a class="lang-element ru" style="display: none; user-select: none;">О нас   <p class="material-icons">expand_more</p></a>
                    <div id="dropdown-content2" class="dropdown-content2">
                        <a class="links" href="${mainUrl}#AnchorRecenzii">
                        <span class="lang-element ro">Materiale Didactice</span>
                        <span class="lang-element en" style="display: none;">Didactic Materials</span>
                        <span class="lang-element ru" style="display: none;">Дидактические Mатериалы</span>
                        </a>
                    <a class="links" href="${mainUrl}#AnchorContact">
                    <span class="lang-element ro">Rutina</span>
                    <span class="lang-element en" style="display: none;">Routine</span>
                    <span class="lang-element ru" style="display: none;">Рутина</span>
                    </a>
                    <a class="links" href="${mainUrl}#AnchorFAQ">
                    <span class="lang-element ro">Tipul și modul studiilor</span>
                    <span class="lang-element en" style="display: none;">Type and mode of studies</span>
                    <span class="lang-element ru" style="display: none;">Тип и форма обучения</span>
                    </a>
                    </div>
                  </div>
            </li></span>

            <span class="log-site"><li>
                <div id="dropdown3" class="dropdown3">
                    <a class="lang-element ro" style="user-select: none;" >Adaptări   <p class="material-icons">expand_more</p></a>
                    <a class="lang-element en" style="display: none; user-select: none;">Adjustments   <p class="material-icons">expand_more</p></a>
                    <a class="lang-element ru" style="display: none; user-select: none;">Aдаптации   <p class="material-icons">expand_more</p></a>
                    <div id="dropdown-content2" class="dropdown-content2">
                        <a class="links" href="${mainUrl}#AnchorRecenzii">
                        <span class="lang-element ro">Materiale Didactice</span>
                        <span class="lang-element en" style="display: none;">Didactic Materials</span>
                        <span class="lang-element ru" style="display: none;">Дидактические Mатериалы</span>
                        </a>
                    <a class="links" href="${mainUrl}#AnchorContact">
                    <span class="lang-element ro">Camere Speciale</span>
                    <span class="lang-element en" style="display: none;">Special Rooms</span>
                    <span class="lang-element ru" style="display: none;">Cпециальные Kомнаты</span>
                    </a>
                    <a class="links" href="${mainUrl}#AnchorFAQ">
                    <span class="lang-element ro">Adaptari Liocomotorii</span>
                    <span class="lang-element en" style="display: none;">Lyomotor adaptations</span>
                    <span class="lang-element ru" style="display: none;">Лиомоторные адаптации</span>
                    </a>
                    <a class="links" href="${mainUrl}#AnchorRecenzii">
                            <span class="lang-element ro">Echipamente Asestive</span>
                            <span class="lang-element en" style="display: none;">Equipment Assertive</span>
                            <span class="lang-element ru" style="display: none;">Оборудование  Напористый</span>
                            </a>
                            <a class="links" href="${mainUrl}#AnchorContact">
                        <span class="lang-element ro">Echipamente Digitale</span>
                        <span class="lang-element en" style="display: none;">Digital Equipment</span>
                        <span class="lang-element ru" style="display: none;">Оборудование Цифровой</span>
                        </a>
                    </div>
                  </div>
            </li></span>

         
        
          
            <span class="log-site">
                <li>
                    <div id="dropdown3" class="dropdown3">
                    <a class="lang-element ro" style="user-select: none;" >Clubul Părinților   <p class="material-icons">expand_more</p></a>
                    <a class="lang-element en" style="display: none; user-select: none;">Parents Club   <p class="material-icons">expand_more</p></a>
                    <a class="lang-element ru" style="display: none; user-select: none;">Родительский Kлуб   <p class="material-icons">expand_more</p></a>
                    <div id="dropdown-content2" class="dropdown-content2">
                    <a class="links" href="${mainUrl}#AnchorContact">
                    <span class="lang-element ro">Ce este?</span>
                    <span class="lang-element en" style="display: none;">What is this?</span>
                    <span class="lang-element ru" style="display: none;">Что это?</span>
                    </a>
                    <a class="links" href="${mainUrl}#AnchorRecenzii">
                    <span class="lang-element ro">Fă parte!</span>
                    <span class="lang-element en" style="display: none;">Be a part!</span>
                    <span class="lang-element ru" style="display: none;">Быть частью этого!</span>
                    </a>
                    </div>
                  </div>
                    </li>
                    </span>
                    <span class="log-site">
                    <li>
                        <div id="dropdown3" class="dropdown3">
                        <a class="lang-element ro" style="user-select: none;" >Activitati   <p class="material-icons">expand_more</p></a>
                        <a class="lang-element en" style="display: none; user-select: none;">Activity   <p class="material-icons">expand_more</p></a>
                        <a class="lang-element ru" style="display: none; user-select: none;">Активность   <p class="material-icons">expand_more</p></a>
                        <div id="dropdown-content2" class="dropdown-content2">
                        <a class="links" href="${mainUrl}#AnchorContact">
                        <span class="lang-element ro">Metodice</span>
                        <span class="lang-element en" style="display: none;">Methodical</span>
                        <span class="lang-element ru" style="display: none;">Методическая</span>
                        </a>
                        <a class="links" href="${mainUrl}#AnchorRecenzii">
                        <span class="lang-element ro">Generale</span>
                        <span class="lang-element en" style="display: none;">General</span>
                        <span class="lang-element ru" style="display: none;">Генерал</span>
                        </a>
                        <a class="links" href="${mainUrl}#AnchorRecenzii">
                        <span class="lang-element ro">Proiecte</span>
                        <span class="lang-element en" style="display: none;">Projects</span>
                        <span class="lang-element ru" style="display: none;">Проекты</span>
                        </a>
                        </div>
                      </div>
                        </li>
                        </span>

                        <li>
                            <a href="${mainUrl}#AnchorNoi" class="lang-element ro" style="margin-right: 15px;">Lumos</a>
                            <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none; margin-right: 15px;">Lumos</a>
                            <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none; margin-right: 15px;">Lumos</a>
                            </li>
        
    
             <li>
            <a href="${mainUrl}#AnchorNoi" class="lang-element ro" style="margin-right: 15px;">Galerie</a>
            <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none; margin-right: 15px;">Gallery</a>
            <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none; margin-right: 15px;">Галерея</a>
        </li>    
             <li>
            <a href="${mainUrl}#AnchorNoi" class="lang-element ro" style="margin-right: 15px;">Echipa</a>
            <a href="${mainUrl}#AnchorNoi" class="lang-element en" style="display: none; margin-right: 15px;">Team</a>
            <a href="${mainUrl}#AnchorNoi" class="lang-element ru" style="display: none; margin-right: 15px;">Команда</a>
        </li>
     
        </ul>
    

       
        
    
        
        <ul class="log">
        <li class="doamneajuta2">
        
        <li>
        <img src="${mainUrl1}./img/Special/BulbOff.png" id="icon-bulb2">
        </li>
        <div class="language-dropdown">
        <button class="dropdown-btn">
          <span>RO   <i class="fa fa-chevron-down" style="font-size:15px;"></i></span>
          
        </button>
        <div class="dropdown-content">
          <a href="#" data-lang="ro">RO</a>
          <a href="#" data-lang="en">ENG</a>
          <a href="#" data-lang="ru">RU</a>
        </div>
      </div>
      </li>
    
    </ul>
    
    <ul class="log1">
    <li class=doamneajuta>
    <div class="icon menu-btn">
    <i class="fas fa-bars"></i>
    </div>
    </li>
    </ul>
    
    </div>
    
    </nav>
    </div>

`;

var icon = document.getElementById("icon-bulb1");
icon.onclick = function () {  
  document.body.classList.toggle("white-theme");
  if (document.body.classList.contains("white-theme")) {
    icon.src = `${mainUrl1}./img/Special/BulbOn.png`;
  } else {
    icon.src = `${mainUrl1}./img/Special/BulbOff.png`;
  }
}

var icon = document.getElementById("icon-bulb2");
icon.onclick = function () {  
  document.body.classList.toggle("white-theme");
  if (document.body.classList.contains("white-theme")) {
    icon.src = `${mainUrl1}./img/Special/BulbOn.png`;
  } else {
    icon.src = `${mainUrl1}./img/Special/BulbOff.png`;
  }
}


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
  this.scrollY > 65 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}








window.addEventListener('resize', function() {
  var div1 = document.getElementById('div1');
  var div2 = document.getElementById('div2');

  if (window.innerWidth <= 1219) {
    div1.style.display = 'none';
    
    div2.style.display = 'block';
   
  } else {
    div1.style.display = 'block';
   
    div2.style.display = 'none';
    
  }
});



