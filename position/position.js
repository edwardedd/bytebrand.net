
function openDescription(){ 
  let text = document.getElementById('description');
  let btnText = document.getElementById('more_btn');
  if(text.style.height !=='auto'){
    text.style.height = 'auto';
    btnText.innerHTML = "Read less"
  } else{
    text.style.height = '100px';
    btnText.innerHTML = "Read more"
  }
}

function openMenu(){
  const menu = document.getElementById("navbar_menu");

  if(menu.style.display == "none")
  {
    menu.style.display = "block";
  } else
  {
    menu.style.display = "none";
  }
};

function Copy() {
  var $temp = $("<input>");
  var $url = $(location).attr('href');
  
  $('.share').on('click', function() {
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
    $(".share").text("URL copied!");
  });
};