const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

const ball = document.createElement('div')
document.body.appendChild(ball)
const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 10
let LPadelHeight = 100
let LPadelSpeed = 25
let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2
let LPadelXPosition = 70

const ballRadius = 20
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
let score = 0 // display score and increase score by one when bal hit pad
let level = 1// increase level by 1 every time score increases by ten
//as levels increas increase ball speed
// if ball gets past paddle end game.



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


function moveBall() {
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

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPadelTop = LPadelYPosition
    let LPadelBottom = LPadelYPosition + LPadelHeight
    let LPadelRight = LPadelXPosition + LPadelWidth

    if(
        (ballBottom >= LPadelTop) &&
        (LPadelBottom >= ballTop) &&
        (ballLeft <= LPadelRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
        score = score + 1

        if(score == 2) {
            ballSpeed = ballSpeed * 2
            level = 2
        }
        if(score == 4) {
            ballSpeed = ballSpeed * 2
            level = 3
        }
        if(score == 6) {
            ballSpeed = ballSpeed * 2
            level = 4
        }
        createScoreboard()
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

wKey = false
sKey = false

document.addEventListener('keydown', (event) => {
    if(event.key == "w") {
        wKey = true
        }
    if(event.key == "s") {
        sKey = true
        }
    })

    document.addEventListener('keyup', (event) => {
        if(event.key == "w") {
            wKey = false
            }
        if(event.key == "s") {
            sKey = false
            }
        })

        function moveLPadel() {
            if(wKey && LPadelYPosition > 0) {
                LPadelYPosition = LPadelYPosition - LPadelSpeed
        }
        if (sKey && LPadelYPosition < windowHeight - LPadelHeight) {
            LPadelYPosition = LPadelYPosition + LPadelSpeed
        }
        LPadel.style.top = `${LPadelYPosition}px`
    }

    const scoreboard = document.createElement('div')
    document.body.appendChild(scoreboard)

    createScoreboard()

    function createScoreboard() {
        scoreboard.style.height = '20px'
        scoreboard.style.width = '140px'
        scoreboard.style.backgroundColor = 'black'
        scoreboard.style.position = 'absolute'
        scoreboard.style.right = '20px'
        scoreboard.style.top = '20px'
        scoreboard.style.color = 'white'
        scoreboard.innerHTML = `Score: ${score}  __Level: ${level}`
        scoreboard.style.padding = '3px'

    }



    function loser() {
    if(ballXPosition <= ballRadius / 2) {
        }
    }

    function animate() {
        loser()
        moveBall()
        moveLPadel()
        requestAnimationFrame(animate)
    }
    animate()
