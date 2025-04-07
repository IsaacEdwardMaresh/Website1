const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

const ball = document.createElement('div')
document.body.appendChild(ball)
const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 20
let LPadelHeight = 100
let LPadelSpeed = 25
let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2

const ballRadius = 100
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

createBall()


function createBall(){
ball.style.height = `${2*ballRadius}px`
ball.style.width = `${2*ballRadius}px`
ball.style.borderRadius = "50%"
ball.style.backgroundColor = "green"
ball.style.position = "absolute"
ball.style.top = `${ballYPosition}px`
ball.style.left = `${ballXPosition}px`
}

setInterval(moveBall, 10)

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection

    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`

    if (ballYPosition < 0|| ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }

    if (ballXPosition < 0|| ballXPosition > windowWidth  - 2 * ballRadius){
        ballXDirection = ballXDirection * -1
    }
}

createLPadel()

function createLPadel() {
    LPadel.style.height = `${LPadelHeight}px`
    LPadel.style.width = `${LPadelWidth}px`
    LPadel.style.backgroundColor = 'blue'
    LPadel.style.position = 'absolute'
    LPadel.style.left = "50px"
    LPadel.style.top = `${LPadelYPosition}px`
}

LPadel.addEventListener('keyup', (event) => {
    if(event.key == "w") {
        if(LPadelYposition <= 0) {
            LpadelYPosition = 0
        }
        else {
        LPadelYPosition = LPadelYposition - LPadelSpeed
        }
    }
    if(event.key == "s") {
        if(LPadelYposition <= windowHeight - LPadelHeight) {
            LpadelYPosition = windowHeight - LPadelHeight
        }
        else {
            LPadelYPosition = LPadelYPosition + LPadelSpeed
        }
        LPadelYPosition = LPadelYposition + LPadelSpeed

    }
    LPadel.style.top = `${LPadelYPosition}px`
})
