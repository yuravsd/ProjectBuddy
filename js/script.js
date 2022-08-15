$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    slidesToShow:3,
    centerMode: true,
    variableWidth: true,
    appendArrows:$('.comments__title__arows'),
  });
  $('.sliderA').slick({
    arrows:true,
    slidesToShow:1,
  });
})
