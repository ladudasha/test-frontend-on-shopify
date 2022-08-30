// web animation api
var btn = document.querySelector(".collapsible__button");
var content = document.querySelector(".collapsible__content");
var visible = document.querySelector(".collapsible__action--visible");
var hid = document.querySelector("action");
var action = document.querySelector(".collapsible__action");

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
