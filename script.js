const container = document.querySelector(".container");
const button = document.querySelector(".grid-val");

createGrids(16);

button.addEventListener("click", () => {
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

container.addEventListener(
  "mouseover",
  (event) => {
    event.target.style.backgroundColor = "black";
  },
  false
);
