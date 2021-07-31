
const container = document.querySelector('#container');

for (i = 0; i < 16 * 16; i++) {
    
    const square = document.createElement('div');
    square.classList.add(`square`);
    square.setAttribute("id", `square${i+1}`);
    container.appendChild(square);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => askSize());

function askSize() {
    let gridSize = parseInt(prompt('Enter grid size (3-20)'));
    alert(`You chose ${gridSize}x${gridSize} grid`);
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "purple";
    });
});

function clearGrid() {
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
};

btn.addEventListener('click', clearGrid);