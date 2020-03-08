$(function(){
  $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 2000
  });

  $('.header-btn').on('click', function(){
    $('.menu').addClass('active');
  });

  $('.close-btn').on('click', function(){
    $('.menu').removeClass('active');
  });


});