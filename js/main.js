
  $(document).ready(function(){
    var $image01 = $('.list01'), 
    $image02 = $('.list02'), 
    $image03 = $('.list03'), 
    $image04 = $('.list04'); 


    $($image01).mouseover(function(){
      $('.list01 a img').attr('src', '../images/5.jpg');
    }).mouseout(function(){
      $('.list01 a img').attr('src', '../images/1.jpg');
    });
    
    $($image02).mouseover(function(){
      $('.list02 a img').attr('src', '../images/6.jpg');
    }).mouseout(function(){
      $('.list02 a img').attr('src', '../images/2.jpg');
    });

    $($image03).mouseover(function(){
      $('.list03 a img').attr('src', '../images/7.jpg');
    }).mouseout(function(){
      $('.list03 a img').attr('src', '../images/3.jpg');
    });
    
    $($image04).mouseover(function(){
      $('.list04 a img').attr('src', '../images/8.jpg');
    }).mouseout(function(){
      $('.list04 a img').attr('src', '../images/4.jpg');
    });

  })


