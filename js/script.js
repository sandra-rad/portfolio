$('.menu-wrapper').on('click', function() {
  $('.page').addClass('open');
 
});


$('.menu li').on('click', function() {
  var toOpen = $(this).attr('data-target');
  if (toOpen != "content") {
      $('.page').removeClass('open').addClass('not-home');
      $('.pag.open').removeClass('open');
      $('.' + toOpen).addClass('open');
      //$('.to-load').load(pageToOpen + '.html');
  } else {
      $('.page').removeClass('open not-home');
  }
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
  cssEase: '',
  infinite: true,
  focusOnSelect: true,

});

        