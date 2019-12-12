
const slider = $(".wrapper_job");
slider.slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  vertical: true,
  prevArrow: $('.scroll_up'),
  nextArrow: $('.scroll_down'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        vertical: false,
      }
    }
  ]
});


slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));