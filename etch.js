
const container = document.querySelector('#container');

function newGrid(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add(`square`);
        square.setAttribute("id", `square${i + 1}`);
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

newGrid(16);

function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
}

function askSize() {
    let size = 0;
    while (size < 3 || size > 30) {
        size = parseInt(prompt('Enter grid size (3-30)'));
    }
    container.innerHTML = '';
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
