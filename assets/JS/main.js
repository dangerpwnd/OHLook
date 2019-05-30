$(function(){
    var prev;    
  
    $('.b1').hover(function(){
    prev = $(this).text();
        $(this).text("See the stars");
    }, function(){
        $(this).text(prev)
    });
  })

  $(function(){
    var prev;    
  
    $('.b2').hover(function(){
    prev = $(this).text();
        $(this).text("Shine bright");
    }, function(){
        $(this).text(prev)
    });
  })
  
  $(function(){
    var prev;    
  
    $('.b3').hover(function(){
    prev = $(this).text();
        $(this).text("Stoke the flame");
    }, function(){
        $(this).text(prev)
    });
  })