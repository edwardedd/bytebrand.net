function scrollDown(){
  let x = screen.width;
  if(x>540){
    var elem = document.getElementById("jobsWrapper");
    elem.scrollTop += 150;
    console.log(screen.width);
  }else if(x<540){
    var elem = document.getElementById("jobsWrapper");
    console.log("zalupa")
    elem.scrollLeft +=200;
  }
  
};

function scrollUp(){
  let x = screen.width;
  if(x>540){
  const elem = document.getElementById("jobsWrapper");
  elem.scrollTop -= 150;
  console.log('aaa')
  }else if(x<540){
    const elem = document.getElementById("jobsWrapper");
    elem.scrollLeft -= 200;
  }
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