const container = document.getElementById('container')
const colors = ["#2e86c1", "#f1c40f", "#e74c3c", "#27ae60", "#f7dc6f"]
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () = > setClolor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.box-shadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
    return colors[Math.floor(Math.random()* colors.length)]
}
