var numberOfDrrumbutton=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrrumbutton;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function(){
   // alert("i have got clicked");
    //what to do when click is detected;
   var buttonInnerHtml=this.innerHTML;
 switch (this.innerHTML) {
  case "w":
    var audio = new Audio('sounds/Tom-1.mp3');
    audio.play();
    break;
  case "a":
    var audio = new Audio('sounds/Tom-2.mp3');
    audio.play();
  break;
  case "s":
    var audio = new Audio('sounds/Tom-3.mp3');
    audio.play();
  break;
  case "d":
    var audio = new Audio('sounds/Tom-4.mp3');
    audio.play();
  break;
  case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
  break;
  case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
  break;
  case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
  break;
  default: console.log("buttonInnerHtml");
    break;
 }
   
});
}


/*   var audio = new Audio('sounds/crash.mp3');
  audio.play();  
  
  */