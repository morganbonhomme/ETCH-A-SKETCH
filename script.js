function creatingGrid(resolution = 16) {
  const gridContainer = document.querySelector(".gridContainer");
  let pixels = 500 / resolution;
  gridContainer.style = `display: grid; grid-template-columns: repeat(${resolution}, ${pixels}px);`;

  for (let i = 0; i < (resolution*resolution); i++) {
    const gridElement = document.createElement("div");
    gridElement.className = "gridElement";
    gridElement.dataset.key = `${i}`;
    gridContainer.appendChild(gridElement);
  }
}

function deleteAllGrid() {
    const gridContainer = document.querySelector(".gridContainer"); 
    let child = gridContainer.lastElementChild;
    while(child) {
      gridContainer.removeChild(child);
      child = gridContainer.lastElementChild;
    }
}
  
function colorGridInGrey() {
  const elements = document.querySelectorAll(".gridElement");
  elements.forEach(element => {
    element.addEventListener("mouseover", (e) => {
      e.target.style.background = "grey";
    });
  });
}

function erase() {
  const elements = document.querySelectorAll(".gridElement");
  elements.forEach(element => {
    element.addEventListener("mouseover", (e) => {
      e.target.style.background = "white";
    });
  });
}

function clearSketch() {
  const elements = document.querySelectorAll(".gridElement");
  elements.forEach(element => {
    element.style.background = "white";
  });
}

function rainbow() {
  const elements = document.querySelectorAll(".gridElement");
  const colorArray = ["#FF9AA2", "#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA", "#ffefa8"]
  elements.forEach(element => {
    element.addEventListener("mouseover", (e) => {
      e.target.style.background =  colorArray[Math.floor(Math.random() * colorArray.length)];
    });
  });
}

function resize() {
  const sizeInput = prompt("Please entrer a number between 1 & 100","");
  let resolution = parseInt(sizeInput);
  console.log(resolution)
  if (isNaN(resolution) || resolution < 0 || resolution > 100) {
    alert("Please entrer a number between 1 & 100")
  } else {
  deleteAllGrid()
  creatingGrid(resolution)
  colorGridInGrey()
  }
}

creatingGrid()
colorGridInGrey()


// Clear sketch button 
const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {
  clearSketch()
  colorGridInGrey()
});

// Eraser button
const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click", () => {
  erase()
});

// Rainbow button
const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", () => {
  rainbow()
});

// Resize button
const resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", () => {
  resize()
});


