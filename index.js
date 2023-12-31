//detecting button press;

var numberOfDrrumbutton=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrrumbutton;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function(){
   // alert("i have got clicked");
    //what to do when click is detected;
   var buttonInnerHtml=this.innerHTML;
   makesound(this.innerHTML);
   buttonAnimation(buttonInnerHtml);
});
}

//Detecting keyword press;

document.addEventListener("keydown",function(event){
    makesound(event.key);
   buttonAnimation(event.key);
});

function makesound(key){

  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
    break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
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
    default: console.log(buttonInnerHtml);
       
   }
}
function buttonAnimation(currentKey){
 var activeButton= document.querySelector("."+currentKey);
 activeButton.classList.add("pressed");

 setTimeout(function(){
  activeButton.classList.remove("pressed");
 },100);
}
/*   var audio = new Audio('sounds/crash.mp3');
  audio.play();  
  
  */
