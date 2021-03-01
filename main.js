const renderer = Renderer()
const frogi = Frogi()
renderer.StartScreen()

let level = 1
let frogLeft = 1
let timer = 5
let win = false





$(".start").click(function () {
    level = 1
    frogLeft = 1
    win = false
    setTimeout(frogi.countDown, 1000)
    $("#container").empty()
    $("#container").append(`
        <h1 class="header">Time Left <div id="timer"></div></h1>
        <div class="instruction"></div>        
        <div  class="box"><i id="frog1" class="fas fa-frog"></i></div> 
        <div class="frogLeftBox">frogs left-${frogLeft}</div>
        <div class="Catch">Catch it!</div>
        <div class="level">level-${level}</div>`)
    const randomMarginTop = Math.floor((Math.random() * 20) + 1) + '%'
    const randomMarginLeft = Math.floor((Math.random() * 90) + 1) + '%'
    $('#frog1').css('margin-top', `${randomMarginTop}`)
    $('#frog1').css('margin-left', `${randomMarginLeft}`)
    $('#frog1').css('font-size', `${frogi.randomFontSize(randomMarginTop)}`)
    $('#frog1').css('color', `${frogi.randomColor()}`)
}
)


$(document).on('click', '.fa-frog', function () {
    $(this).remove();
    frogLeft--

    if (frogLeft == 0) {
        level++
        timer = level + 5
        frogLeft = level

    }
    if (frogLeft == 1) {
        frogi.game1()
    }

    if (frogLeft == 2) {
        frogi.game2()
    }
    if (frogLeft == 3) {
        frogi.game3()
    }
    if (frogLeft == 4) {
        frogi.game4()
    }
    if (frogLeft == 5) {
        frogi.game5()
    }
    if (level == 6) {
        level = 1
        win = true
        frogLeft = 0


        $("#container").empty()
        $("#container").append(`
            <h1 class="header">Frog Game <div id="timer"></div></h1>
                <div class="instruction">You won <br> Click Restart to play again
                <div class="win"></div>
                </div>        
                <div  class="box"></div> 
                <div class="frogLeftBox"></div>
                <div onclick=frogi.restart() class="restart">Restart</div>
                <div class="level"></div>`)

    }

})























