(function($) {

    //Vars
    var on_off = true;

	// Go Top Button
    $('.go-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    
    // Search Menu
    $('.menu-search').hide();
    $('.searchmenu').click(function(){
      if(on_off){
        $('.menu-search').fadeIn(400);
        on_off = false;
      }else{
          on_off = false;
          $('.menu-search').fadeOut(400);
          on_off = true;
      }
    });

    $('.close-search').click(function(){
        $('.menu-search').fadeOut(400);
    });

})( jQuery );