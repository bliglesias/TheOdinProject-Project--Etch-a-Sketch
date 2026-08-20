const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "160px";

const container2 = document.getElementById("container-2");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "160px";

for(let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.style.width = "10px";
    square.style.height = "10px";
    square.style.backgroundColor = "black";
    // square.style.margin = "10px";

    square.addEventListener("mouseover", () =>{
        square.style.backgroundColor = "limeGreen";
    });

    container.appendChild(square);
    
}
for(let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.style.width = "10px";
    square.style.height = "10px";
    square.style.backgroundColor = "black";
    // square.style.margin = "10px";

    square.addEventListener("mouseover", () =>{
        square.style.backgroundColor = "yellow";
    });

    container.appendChild(square);
    
}




