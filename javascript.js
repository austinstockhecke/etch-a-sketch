const contain = document.querySelector(".container");


function createGrid(numSquares) {
    for( let i =0; i < numSquares; i++) {
        let col = document.createElement("div");
        col.setAttribute("class", "col");
        for(let j = 0; j < numSquares; j++) {
            var row = document.createElement("div");
            row.setAttribute("class","row");
            


            col.appendChild(row);
        }
        contain.appendChild(col);

    }
}

createGrid(16);

let changeRow = document.querySelectorAll("[class=row]");
console.log(changeRow);
Object.entries(changeRow).map((object) => {
    object[1].addEventListener("mouseenter", function(event) {
        event.target.style.backgroundColor = "black";

    });
});


