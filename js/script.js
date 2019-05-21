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

        