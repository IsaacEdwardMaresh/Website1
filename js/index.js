const hr_hand = document.getElementById('hr_hand')
cont button = document.querySelector(".btn")

const list = ['running', 'paused']
let index = 0
buttony.addEventListener('click', ()=>{
    hr_hand.style.animationPlayState = list[index]
    index = (index + 1) % 2
