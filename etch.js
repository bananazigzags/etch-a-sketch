const container = document.querySelector('#container');

function newGrid(gridSize) {
    if (Number.isInteger(size) == false) {
        return;
    }
    container.textContent = '';

    for (i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.className = "square";
        container.appendChild(square);
    }
    
    container.setAttribute("style", `grid-template-columns: repeat(${gridSize}, 1fr); 
        grid-template-rows: repeat(${gridSize}, 1fr);`);

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
        });
    });
}

function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
}

function askSize() {
    do {
        size = parseInt(prompt('Enter grid size (max 30)'));
    } while (size < 1 || size > 30);
    newGrid(size);
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
};

const resize = document.querySelector('#resize');
resize.addEventListener('click', () => askSize());

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => clearGrid());

let size = 16;
newGrid(size);
