// Global variables we can access anywhere
const contain = document.querySelector(".container");
let numGridSquares = getComputedStyle(document.head).getPropertyValue("--gridNum");  // CSS variable that will allow changes to grid size
let resetButton = document.querySelector("[class=reset]");
let randomButton = document.querySelector("[class=randomize]");

function createGrid(numSquares) {
    document.documentElement.style.setProperty("--gridNum", numSquares);  // this is where the magic happens

    // this will create divs inside our container; each div is one grid square (i.e. 10 would be 10x10 = 100 divs inside container)
    for(let i=0; i < numSquares*numSquares; i++){ 
        let gridSquares = document.createElement("div");
        gridSquares.setAttribute("class", "gridSquare");

        contain.appendChild(gridSquares);
    }
    
    // grabs a nodelist containing every div that has been created
    let changeRow = document.querySelectorAll("[class=gridSquare]");

    // need to iterate through list of divs, so use map and object[1] contains the list of divs
    Object.entries(changeRow).map((object) => {
        object[1].addEventListener("mouseenter", function(event) {
            event.target.style.backgroundColor = "black";
            });
        });

}

// remove all the divs inside container that were previously created in createGrid
function resetGrid() {
    document.querySelector(".container").innerHTML = "";
}


resetButton.addEventListener("click", function () {
   let reSize = 4;  // placeholder value so that prompt stays up if anything between 5-100 hasn't been entered
   while (reSize < 5 || reSize > 100){
   reSize = prompt("How many grid squares would you like? (5-100)");
        if (reSize == null) {  // null means user clicked cancel on the prompt
            return;
        }
   }
   resetGrid();
   createGrid(reSize);
    
});

randomButton.addEventListener("click", function() {
    let changeRow = document.querySelectorAll("[class=gridSquare]"); // same as before, grab a node list and iterate through
    Object.entries(changeRow).map((object) => {
    object[1].addEventListener("mouseenter", function(event) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16); // this equation returns a random number value
    event.target.style.backgroundColor = "#" + randomColor;
        });
    });
})


createGrid(16); // default grid

