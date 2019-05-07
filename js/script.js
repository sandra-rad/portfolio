jQuery(document).ready(function($) {
  $(".films-content").hide();
  $(".menu-list").hide();
  $(".about-wrapper").hide();
	$( ".menu-wrapper" ).click(function() {
        $(".hello-message-wrapper").hide();
        $(".menu-wrapper").hide();
        $(".span-cv").show();
        $(".grid-container").css( "grid-template-columns", "10% 87% 3%" );
        $(".four").css( "background", "linear-gradient(to right,  #ffffff 0%,#ffffff 80%,#f1b32a 80%,#f1b32a 100%)" );
      
        $(".exit-wrapper").show();
        $(".menu-list").show();
        $(".films-content").hide();
      });

      $( ".exit-wrapper" ).click(function() {
        $(".hello-message-wrapper").show();
        $(".menu-wrapper").show();
        $(".span-cv").show();
        $(".grid-container").css( "grid-template-columns", "3% 94% 3%" );
        $(".four").css( "background", "linear-gradient(to right,  #f1b32a 0%, #f1b32a 50%,#f8f8f8 50%,#f8f8f8 100%)" );
        $(".exit-wrapper").hide();
        $(".menu-list").hide();
        $(".films-content").hide();
        
      });
      $( ".homepage" ).click(function() {
        $(".hello-message-wrapper").show();
        $(".menu-wrapper").show();
        $(".span-cv").show();
        $(".grid-container").css( "grid-template-columns", "3% 94% 3%" );
        $(".four").css( "background", "linear-gradient(to right,  #f1b32a 0%, #f1b32a 50%,#f8f8f8 50%,#f8f8f8 100%)" );
  
        $(".exit-wrapper").hide();
        $(".menu-list").hide();
        $(".films-content").hide();
        
      });

      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        infinite: true,
        focusOnSelect: true,

      });
      $( ".films" ).click(function() {
        $(".menu-wrapper").show();
        $(".span-cv").show();
        $(".films-content").show();
        $(".hello-message-wrapper").hide();
        $(".grid-container").css( "grid-template-columns", "3% 94% 3%" );
        $(".four").css( "background", "linear-gradient(to right,  #3D5063 0%,#3D5063 100%)" );
        $(".exit-wrapper").hide();
        $(".menu-list").hide();


      });
      $( ".about" ).click(function() {
        $(".hello-message-wrapper").hide();
        $(".grid-container").css( "grid-template-columns", "3% 94% 3%" );
        $(".four").css( "background", "linear-gradient(to right, #f8f8f8 0%, #f8f8f8 30%, #f1b32a 30%,#f1b32a 100%)" );
        $(".exit-wrapper").hide();
        $(".menu-list").hide();
        $(".about-wrapper").show();
        $(".menu-wrapper").show();
        $(".span-cv").show();
       


      });
        

});


        