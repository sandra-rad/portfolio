$(document).ready(function() {
  $(".error").hide();
  var widthV = $(window).width();  
  if (widthV < 800  ) {
    $(".grid-container").hide();
    $(".error").show();
    
  }
  $(window).resize(function(){
    if ($(window).width() < 800) {  
      $(".grid-container").hide();
      $(".error").show();
    }
    else{
      $(".grid-container").show();
      
    }     

});

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    infinite: true,
    cssEase: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    asNavFor: ".slider-nav"
  });
  $(".slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    cssEase: true,
    infinite: true,
    focusOnSelect: true
  });
});
