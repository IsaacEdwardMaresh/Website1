const hr_hand = document.getElementById('hr_hand')
const button = document.querySelector(".btn")

const list = ['running', 'paused']
let index = 0
button.addEventListener('click', ()=> {
    hr_hand.style.animationPlayState = list[index]
    index = (index + 1) % 2
}
