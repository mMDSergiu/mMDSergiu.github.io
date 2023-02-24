
$("input[type='checkbox']").change(function() {

  if ($(this).is(":checked")) {

    $('body').addClass("whiteBackground");
    
  
    $('.bulb').css({
      "background-repeat": "no-repeat",
      "background-position": "center center",
      "background-position-y": "20px"
    });
    
   
    setTimeout(function() {
      $('.big-text').text('Pagina pe care o căutați nu a fost găsită...').css('color', '#000');
      $('.big-text').addClass('animated fadeIn');
      $('.big-text').removeClass('flash');
      $('.small-text').html("Ai dori sa te întorci la <a href='../index.html'>PAGINA PRINCIPALĂ</a> în loc?").css('color', '#000');
      $('.small-text').addClass('fadeIn');
      $('.small-text').removeClass('flash');
      $(".lines").css('display', 'block');
      $(".lines").addClass('animated tada');
    }, 650);
  } else {
   
    $('body').removeClass("whiteBackground");
    
   
    setTimeout(function() {
      $('.big-text').text(' Ooops... Se pare că te ai pierdut...').css('color', '#fff');
      $('.big-text').removeClass('fadeIn');
      $('.big-text').addClass('flash');
      $('.small-text').text('Te rog aprinde lumina!').css('color', '#fff');
      $('.small-text').removeClass('fadeIn');
      $('.small-text').addClass('flash');
    }, 0);
    
    
    setTimeout(function() {
      $('.bulb').css("background", "none");
    }, 100);
    
   
    $(".lines").css('display', 'none');
  }
});