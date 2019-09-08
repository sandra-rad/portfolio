$(document).ready(function() {
  $(".error").hide();
  var widthV = $(window).width();
  if (widthV < 800) {
    $(".grid-container, #film-section").hide();
    $(".error").show();
  }
  $(window).resize(function() {
    if ($(window).width() < 800) {
      $(".grid-container, #film-section").hide();
      $(".error").show();
    } else {
      $(".grid-container, #film-section").show();
      $(".error").hide();
    }
  });

  
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });

  });
