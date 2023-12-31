const container = document.querySelector(".container");
const grids = document.querySelector(".grid-val");
const blackColor = document.querySelector(".black-color");
const randomColors = document.querySelector(".random-colors");
const shadeColors = document.querySelector(".shade-colors");
const eraser = document.querySelector(".eraser");
const eraseBoard = document.querySelector(".erase");

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

eraser.onclick = () => white();

randomColors.onclick = () => random();

shadeColors.onclick = () => {
  const boxes = container.querySelectorAll(".grid");
  boxes.forEach((box) => {
    let darkness = 0.0;
    box.addEventListener("mouseover", (event) => {
      darkness += 0.1;
      console.log(darkness);
      event.target.style.backgroundColor = `rgba(0, 0 , 0, ${darkness})`;
    });
  });
};

function black() {
  const boxes = container.querySelectorAll(".grid");

  boxes.forEach((box) => {
    box.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
  });
}

function white() {
  const boxes = container.querySelectorAll(".grid");

  boxes.forEach((box) => {
    box.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "white";
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

eraseBoard.onclick = () => {
  location.reload();
};
