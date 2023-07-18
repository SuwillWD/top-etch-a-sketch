const container = document.querySelector(".container");
const grids = document.querySelector(".grid-val");
const blackColor = document.querySelector(".black-color");
const randomColors = document.querySelector(".random-colors");

createGrids(16);

grids.addEventListener("click", () => {
  const sideSquares = prompt(
    "Enter number of Squares on each side of the grid:(Maximum 100)"
  );
  if (sideSquares >= 100) {
    const answer = confirm(
      "Too many Squares! This may crash your browser. Are you sure?"
    );
    if (!answer) {
      sideSquares = 16;
    }
  }
  removeGrids();
  createGrids(sideSquares);
});

function createGrids(sideSquares) {
  for (let i = 0; i < sideSquares ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.width =
      (container.clientWidth / sideSquares - 2).toString() + "px";
    div.style.height =
      (container.clientHeight / sideSquares - 2).toString() + "px";
    container.appendChild(div);
  }
}

function removeGrids() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

blackColor.onclick = () => black();

randomColors.onclick = () => random();

function black() {
  const boxes = container.querySelectorAll(".grid");

  boxes.forEach((box) => {
    box.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
  });
}

function random() {
  const boxes = container.querySelectorAll(".grid");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (event) => {
      const red = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      event.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    });
  });
}
