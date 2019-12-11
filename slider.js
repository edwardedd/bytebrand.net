
$(".owl-carousel").owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText:["<img src='../src/upload.png'>", "<img src='../src/upload.png'>"],
  navClass:['owl-prev','owl-next'],
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1100:{
        items:3
    },
    
}
});