const hero = document.querySelector(".hero");
hero.style.top = "500px";
hero.style.left = "100px";

const ghost = document.querySelector(".ghost");
ghost.style.top = "200px";
ghost.style.left = "600px";

const treasure = document.querySelector(".treasure");
treasure.style.top = "0px";
treasure.style.left = "400px";

// hero controlls section

window.addEventListener("keyup", (e) => {
  let currentTop = parseInt(window.getComputedStyle(hero).top);
  if (currentTop > 0) {
    if (e.code === "ArrowUp" || e.code === "KeyW") {
      hero.style.top = currentTop - 100 + "px";
    }
  }
});

window.addEventListener("keyup", (e) => {
  let currentTop = parseInt(window.getComputedStyle(hero).top);
  if (currentTop < 500) {
    if (e.code === "ArrowDown" || e.code === "KeyS") {
      hero.style.top = currentTop + 100 + "px";
    }
  }
});

window.addEventListener("keyup", (e) => {
  let currentLeft = parseInt(window.getComputedStyle(hero).left);
  if (currentLeft > 0) {
    if (e.code === "ArrowLeft" || e.code === "KeyA") {
      hero.style.left = currentLeft - 100 + "px";
    }
  }
});

window.addEventListener("keyup", (e) => {
  let currentLeft = parseInt(window.getComputedStyle(hero).left);
  if (currentLeft < 700) {
    if (e.code === "ArrowRight" || e.code === "KeyD") {
      hero.style.left = currentLeft + 100 + "px";
    }
  }
});

const victoryModal = document.querySelector(".victory");

if (
  treasure.style.top === hero.style.top &&
  treasure.style.left === hero.style.left
) {
  victoryModal;
}
