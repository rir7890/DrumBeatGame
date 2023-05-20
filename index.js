
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });

// }

// document.addEventListener("keypress", function(event) {

//   makeSound(event.key);

//   buttonAnimation(event.key);

// });


// function makeSound(key) {

//   switch (key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;

//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;

//     case "s":
//       var tom3 = new Audio('sounds/tom-3.mp3');
//       tom3.play();
//       break;

//     case "d":
//       var tom4 = new Audio('sounds/tom-4.mp3');
//       tom4.play();
//       break;

//     case "j":
//       var snare = new Audio('sounds/snare.mp3');
//       snare.play();
//       break;

//     case "k":
//       var crash = new Audio('sounds/crash.mp3');
//       crash.play();
//       break;

//     case "l":
//       var kick = new Audio('sounds/kick-bass.mp3');
//       kick.play();
//       break;


//     default: console.log(key);

//   }
// }


// function buttonAnimation(currentKey) {

//   var activeButton = document.querySelector("." + currentKey);

//   activeButton.classList.add("pressed");

//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);

// }




let b=document.getElementsByTagName('button');


for(let x=0;x<b.length;x++){
  b[x].addEventListener('click', ()=>{
    // alert("hello");
    let val=b[x].innerHTML;
    // console.log(val);
    makeSound(val);
    addPressAddAnimation(val);

  });
}

function addPressAddAnimation(val){
    let a=document.querySelector('.'+val);
    a.classList.add('pressed');
    setTimeout(()=>{
      a.classList.remove('pressed');
    },200);
}

document.addEventListener('keypress',(event)=>{
  console.log(event.key);
  makeSound(event.key);
  addPressAddAnimation(event.key);
});

function makeSound(val){
  if(val==='w'){
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
  }else if(val==='a'){
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  else if(val==='s'){
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  else if(val==='d'){
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else if(val==='j'){
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  else if(val==='k'){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
  }
  else{
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}
