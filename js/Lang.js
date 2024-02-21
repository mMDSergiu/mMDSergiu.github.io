
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

        

        const dropdownBtn1 = document.querySelector('.dropdown-btn1');
        const dropdownContent1 = document.querySelector('.dropdown-content1');
        const elements1 = document.querySelectorAll('.lang-element1');
        
        dropdownBtn1.addEventListener('click', function() {
          dropdownContent1.classList.toggle('show');
        });
        
        dropdownContent1.addEventListener('click', function(event) {
          if (event.target.tagName === 'A') {
            const lang = event.target.dataset.lang;
            elements1.forEach(function(el) {
              if (el.classList.contains(lang)) {
                el.style.display = 'block';
              } else {
                el.style.display = 'none';
              }
            });
            dropdownBtn1.textContent = event.target.textContent;
            dropdownContent1.classList.remove('show');
            dropdownContent1.querySelectorAll('a').forEach(function(link) {
              link.classList.remove('active');
              if (link.dataset.lang === lang) {
                link.classList.add('active');
              }
            });
          }
        });

        
