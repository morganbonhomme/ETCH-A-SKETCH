const masterDiv = document.querySelector(".gridContainer");

// Defining the size of the square
const size = document.querySelector("input");




// Creating the square of elements
for (let i = 0; i < (16*16); i++) {
  const gridElement = document.createElement("div");
  gridElement.className = "gridElement";
  gridElement.dataset.key = `${i +1}`;
  masterDiv.appendChild(gridElement);
}

const elements = document.querySelectorAll(".gridElement");

elements.forEach(element => {
  element.addEventListener("mouseover", (e) => {
    e.target.style.background = "grey";
  });
});

// Delete the sketch
const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {
  elements.forEach(element => {
     element.style.background = "white";
  });
});