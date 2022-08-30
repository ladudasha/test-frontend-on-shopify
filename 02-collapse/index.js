// web animation api
var btn = document.querySelector(".collapsible__button");
var content = document.querySelector(".collapsible__content");


const anim = content.animate(
  { transform: "translate(-50%)" },
  { duration: 3000, fill: "forwards", easing: "ease-in-out" }
);
anim.pause();

btn.addEventListener("click", () => {
  if (anim.playState === "paused") {
    anim.play();
  } else {
    anim.reverse();
  }
});
