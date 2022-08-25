// var btn = document.querySelector('.collapsible__button');
// var content = document.querySelector('.collapsible__content');

// document.querySelector('.collapsible__button').addEventListener("click", hiddenCloseclick);
// 	function hiddenCloseclick() {
// let x = document.querySelector('.collapsible__content');
//       if (x.style.display == "none"){
// 	  x.style.display = "block";
// 	  } else {
// 	 x.style.display = "none"};
//     }


// const el = document.querySelector('.collapsible__action--visible');
// el.style.display = 'none';
// var content = document.querySelector('.collapsible__content');
// content.style.display = 'none';





// уезжает
var btn = document.querySelector('.collapsible__button');
var content = document.querySelector('.collapsible__content');
var visible = document.querySelector('.collapsible__action--visible');
var hid = document.querySelector('.collapsible__action--hidden');
var action = document.querySelector('.collapsible__action');


const anim = content
.animate(
  
	{transform: "translate(-50%)"},
	{duration: 3000, fill: 'forwards', easing: "ease-in-out"}
);

anim.pause();

btn.addEventListener("click", () => {
  if (anim.playState === "paused") {
    anim.play();
  } else {
    anim.reverse();    
  }
});



// меняем надпись на buttun

// function myFunction() {
//   btn.addEventListener("click", function () {
//     if (action.classList.contains('.collapsible__action--hidden')) {
//       action.style.display = 'block';
//     } else {
//       action.style.display = 'none';
     
//     }
     
//   });

// }




