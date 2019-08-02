const contain = document.querySelector(".container");
let numGridSquares = getComputedStyle(document.head).getPropertyValue("--gridNum");
let resetButton = document.querySelector("[class=reset]");
let randomButton = document.querySelector("[class=randomize]");


function createGrid(numSquares) {
    document.documentElement.style.setProperty("--gridNum", numSquares);

    for(let i=0; i < numSquares*numSquares; i++){ 
        let gridSquares = document.createElement("div");
        gridSquares.setAttribute("class", "gridSquare");

        contain.appendChild(gridSquares);
    }

    let changeRow = document.querySelectorAll("[class=gridSquare]");
    Object.entries(changeRow).map((object) => {
    object[1].addEventListener("mouseenter", function(event) {
    event.target.style.backgroundColor = "black";
    });
});
}

function resetGrid() {
    document.querySelector(".container").innerHTML = "";
}

resetButton.addEventListener("click", function () {
   let reSize = 4;
   while (reSize < 5 || reSize > 100){
   reSize = prompt("How many grid squares would you like? (5-100)");
        if (reSize == null) {
            return;
        }
   }
   resetGrid();
   createGrid(reSize);
    
});

randomButton.addEventListener("click", function() {
    let changeRow = document.querySelectorAll("[class=gridSquare]");
    Object.entries(changeRow).map((object) => {
    object[1].addEventListener("mouseenter", function(event) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    event.target.style.backgroundColor = "#" + randomColor;
        });
    });
})


createGrid(16);


