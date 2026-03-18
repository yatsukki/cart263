let erasing = false;
let brushSize = 6;
let eraserSize = 24;
let brushColor = "black";

function setup() {
  //creating canvas
  let canvas = createCanvas(800, 500);
  canvas.parent("canvasScroll");
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    if (erasing) {
      stroke(255);
      strokeWeight(eraserSize);
    } else {
      stroke(brushColor);
      strokeWeight(brushSize);
    }

    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
//eraser tool event listener
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    erasing = !erasing;
    event.preventDefault();
  }
 //increasing brush size
  if (event.key === "[") {
    brushSize += 4;
  }
//decreasing brush size
  if (event.key === "]") {
    brushSize = Math.max(4, brushSize - 4);
  }
});

let colors = [
  "#ff0000",
  "#ff7f00",
  "#ffff00",
  "#00ff00",
  "#00ffff",
  "#0000ff",
  "#8b00ff",
  "#ff69b4",
  "#ffffff",
  "#000000",
];

//fetching div for the color palette
let palette = document.getElementById("colorPalette");
//applying function to each items in array of colors

colors.forEach(function (color) {
  let box = document.createElement("div");
  box.classList.add("colorBox");

  box.style.backgroundColor = color;

  box.addEventListener("click", function () {
    brushColor = color;
  });

  palette.appendChild(box);
});

//fetching brush palette div
let brushPalette = document.getElementById("brushPalette");

brushSizes.forEach(function (size) {
  let option = document.createElement("div");
  option.classList.add("brushOption");

  let line = document.createElement("span");
  line.style.height = size + "px";

  option.appendChild(line);
  brushPalette.appendChild(option);

  option.addEventListener("click", function () {
    brushSize = size;

    document.querySelectorAll(".brushOption").forEach(function (item) {
      item.classList.remove("active");
    });

    option.classList.add("active");
  });
});
