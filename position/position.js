
function openDescription(){ 
  let text = document.getElementById('description');
  let btnText = document.getElementById('more_btn');
  if(text.style.display =='none'){
    text.style.display = 'block';
    btnText.innerHTML = "Read less"
  } else{
    text.style.display = 'none';
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
}