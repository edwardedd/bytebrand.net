function scrollDown(){
  // let x = screen.width;
  // if(x>540){
  //   var elem = document.getElementById("jobsWrapper");
  //   elem.scrollTop += 150;
  //   console.log(screen.width);
  // }else if(x<540){
  //   var elem = document.getElementById("jobsWrapper");
  //   console.log("zalupa")
  //   elem.scrollLeft +=200;
  // }
  
};

function scrollUp(){
  // let x = screen.width;
  // if(x>540){
  // const elem = document.getElementById("jobsWrapper");
  // elem.scrollTop -= 150;
  // console.log('aaa')
  // }else if(x<540){
  //   const elem = document.getElementById("jobsWrapper");
  //   elem.scrollLeft -= 200;
  // }
};

function openMenu(){
  const menu = document.getElementById("navbar_menu");

  if(menu.style.display == "none")
  {
    menu.style.display = "block";
  } else
  {
    menu.style.display = "none";
  }
}


  $('.attach_cv').change(function(){
    let file = $(this).val();
    file = file.replace(/.*[\/\\]/, '');
    $('.filename-container').append("<span  class='filename'>" + file +"<img id='closed_f' src='src/cancel.png' alt=''>"+"</span>").show();
    $('#closed_f').on('click', function(e){
      $('.filename-container').empty();
      console.log("zal")
    })
  });


  

    
    $('.share').on('click', function() {
      var $temp = $("<input>");
      var $url = $(location).attr('href');
      $("body").append($temp);
      $temp.val($url).select();
      document.execCommand("copy");
      $temp.remove();
      $(".share").text("URL copied!");
    });
  





 

