// houses all the 'divs'
const container = document.querySelector("#container");

// default grid
for(let i = 0; i < 256; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "red";
        })

        container.appendChild(square);
    }

// Creates a new grid based on userInput: remove the old(reset) -> for-loop makes a new grid
function createGrid(input){
    container.innerHTML = "";
    let inputSquared = Math.pow(input, 2);

    for(let i = 0; i < inputSquared; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "red";
        })

        container.appendChild(square);
    }
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    createGrid(16);
})




