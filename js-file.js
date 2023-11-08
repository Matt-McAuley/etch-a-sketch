//Grid creation
const squareContainer = document.querySelector("#squares");
createGrid(30);

const body = document.querySelector("body");
body.draggable = false;
let isMousePressed = false;
body.addEventListener('mousedown', () => {
    isMousePressed = true;
});
body.addEventListener('mouseup', () => {
    isMousePressed = false;
});
body.addEventListener('drag', () => {
    console.log("dragging");
})

function createGrid(dimension) {
    for (let row = 0; row < dimension; row++) {
        let rowDiv = document.createElement("div")
        rowDiv.setAttribute("id", "rowDiv")
        squareContainer.appendChild(rowDiv)
        for (let col = 0; col < dimension; col++) {
            let square = document.createElement("div");
            rowDiv.appendChild(square)
            square.setAttribute("id", "square")
            //change square colors when hovered over
            let light = 100;
            square.addEventListener('mousemove', function(event) {
                const source = event.target;
                if (isMousePressed) {
                    if (light > 0) {
                        light = light-5;
                    }
                    source.style.cssText = "background-color: hsl(0, 0%, "+ String(light) +"%)";
                }
            });
            square.addEventListener('click', function(event) {
                    const source = event.target;
                    if (light > 0) {
                        light = light-20;
                    }
                    source.style.cssText = "background-color: hsl(0, 0%, "+ String(light) +"%)";
            });
        }
    }
}

// const dimensionButton = document.querySelector("#dimension");
// dimensionButton.addEventListener('click', () => {
//     let val = Number(prompt("New Dimension [1,100]: "));
//     while (isNaN(val) || val < 1 || val > 100) {
//         val = Number(prompt("Please enter a valid number [1,100]: "));
//     }
//     while (squareContainer.firstChild) {
//         squareContainer.firstChild.remove()
//     }
//     createGrid(val);
// });

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
    squares = document.querySelectorAll("#square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "white";
    }
});

const slider = document.querySelector(".slider");
const dimensionValue = document.querySelector("#slidervalue");
slider.addEventListener('mouseup', (event) => {
    let sliderValue = event.target.value;
    while (squareContainer.firstChild) {
        squareContainer.firstChild.remove()
    }
    createGrid(sliderValue);
})
slider.addEventListener('input', (event) => {
    let sliderValue = event.target.value;
    dimensionValue.textContent = "Dimension: " + sliderValue;
})