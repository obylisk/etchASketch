const container =   document.getElementById("container");

makeGrid(16);
reset();

function makeGrid(x){
  let grid = document.createElement("div");
  grid.classList.add("grid");
  //container.appendChild(grid);
  for (let i = 0; i < x; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 1; j <= x; j++) {
      let cell = document.createElement("div");
      cell.className = "gridSquare";
      cell.addEventListener("mouseenter", (e) => {e.target.style.backgroundColor = "blue";})
      cell.addEventListener("click", (e) => {e.target.style.backgroundColor = "white";})
      row.appendChild(cell);
    };
    container.appendChild(row);
    }

}

function reset() {
  let button = document.querySelector("button");
  button.addEventListener("click", resetGrid, false);
}

function resetGrid(){
  container.innerHTML = "";
  let cellNumber = prompt("Selet grid size", 16);
  if (cellNumber >= 10 && cellNumber <= 50) {
    makeGrid(cellNumber);
  } else {
    alert("Select a number between 10 and 50.")
    resetGrid();
  }
}
