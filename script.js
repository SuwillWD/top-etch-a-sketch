const container = document.querySelector(".container");

const squares = 16;

for (let i = 0; i < squares ** 2; i++) {
  const div = document.createElement("div");
  div.classList.add("grid");
  div.style.width = (container.clientWidth / squares - 2).toString() + "px";
  div.style.height = (container.clientHeight / squares - 2).toString() + "px";
  container.appendChild(div);
}

container.addEventListener(
  "mouseover",
  (event) => {
    event.target.style.backgroundColor = "black";
  },
  false
);
