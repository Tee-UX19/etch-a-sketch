const ctn = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("Box");
  ctn.append(newDiv);
}

const boxes = document.querySelectorAll(".Box");
boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add("GBox");
  });
});

let size=4;

const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  document.querySelectorAll(".Box").forEach((box) => {
    box.classList.remove("GBox");
  });
});

btn.addEventListener("click", () => {
  let input = prompt("Enter the number of squares per side for the new grid");
  while (input === null || isNaN(input) || input < 1 || input > 100) {
    if (input === null) {
      return; // Exit if the user cancels the prompt
    }
    input = prompt("Please enter a number between 1 and 100");
  }
  size = input;

  createGrid(size);
});




function createGrid(size){
  while (ctn.firstChild) {
    ctn.removeChild(ctn.firstChild);
  }
  let newFlexBasis= 100/size+"%";

  document.documentElement.style.setProperty("--flexBasis", newFlexBasis);

 
  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");

    newDiv.addEventListener("mouseover", () => {
      newDiv.classList.add("GBox");});
    newDiv.classList.add("Box");
    ctn.append(newDiv);
  }
}
