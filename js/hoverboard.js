const container = document.getElementById('container')
const colors = ["#2e86c1", "#f1c40f", "#e74c3c", "#27ae60", "#f7dc6f"]
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
}
