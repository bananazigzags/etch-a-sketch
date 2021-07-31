
const container = document.querySelector('#container');

for (i = 0; i < 16 * 16; i++) {
    
    const square = document.createElement('div');
    square.classList.add(`square`);
    square.setAttribute("id", `square${i+1}`);
    container.appendChild(square);
}
