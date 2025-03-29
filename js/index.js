const hr_hand = document.getElementById('hr_hand')

const list = ['running', 'paused']
let index = 0
hr_hand.addEventListener('click', ()=>{
    hr_hand.style.animationPlayState = list[index]
    index = (index + 1) % 2
