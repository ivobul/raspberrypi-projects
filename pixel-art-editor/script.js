let grabColor;
const colorPaletteBoxes = document.querySelectorAll(".color-palette-box");
const gridBoxes = document.querySelectorAll(".grid-box");
const btn = document.querySelector(".btn");

colorPaletteBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    grabColor = window.getComputedStyle(box).getPropertyValue("background-color");
  });
});

gridBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (grabColor) {
      box.style.backgroundColor = grabColor;
    }
    else {
      box.style.backgroundColor = "black";
    }
  });
});

btn.addEventListener("click", () => {
  gridBoxes.forEach((box) => {
    box.style.backgroundColor = "initial";
  });

  grabColor = "";
});