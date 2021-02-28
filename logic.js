const Frogi = function(){

    const countDown = () => {
        timer--;
        if (timer > 0 && !win) {
            setTimeout(countDown, 1000)
            document.getElementById("timer").innerHTML = timer
    
        }
    
        if (timer == 0 && !win) {
            $("#container").empty()
            $("#container").append(`
            <h1 class="header">Frog Game <div id="timer"></div></h1>
             <div class="instruction">Game Over <br> Click Restart to play again
             <div class="lost"></div>
             </div>        
             <div  class="box"></div> 
             <div class="frogLeftBox"></div>
             <div onclick=frogi.restart() class="restart">Restart</div>
             <div class="level"></div>`)
        }
    }

    const restart = function () {
        win = false
        timer = 5
        level = 1
        frogLeft = 1
        setTimeout(countDown, 1000)
    
        $("#container").empty()
        $("#container").append(`
        <h1 class="header">Time Left <div id="timer"></div></h1>
        <div class="instruction"></div>        
            <div  class="box"><i id="frog1"  class="fas fa-frog"></i></div> 
            <div class="frogLeftBox">frogs left -${frogLeft}</div>
            <div class="Catch">Catch it!</div>
            <div class="level">level-${level}</div>`)
        const randomMarginTop = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft = Math.floor((Math.random() * 90) + 1) + '%'
        const randomFontSize = Math.floor((Math.random() * 5) + 1) + 'em'
        $('#frog1').css('margin-top', `${randomMarginTop}`)
        $('#frog1').css('margin-left', `${randomMarginLeft}`)
        $('#frog1').css('font-size', `${randomFontSize}`)
    }

    const game1 = function () {
        $("#container").empty()
        $("#container").append(`
        <h1 class="header">Time Left <div id="timer"></div></h1>
        <div class="instruction"></div>        
                    <div  class="box"><i id="frog1"class="fas fa-frog"></i></div> 
                    <div class="frogLeftBox">frogs left - ${frogLeft}</div>
                    <div class="Catch">Catch it!</div>
                    <div class="level">level-${level}</div>`)
        const randomMarginTop = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft = Math.floor((Math.random() * 90) + 1) + '%'
        const randomFontSize = Math.floor((Math.random() * 5) + 1) + 'em'
        $('#frog1').css('margin-top', `${randomMarginTop}`)
        $('#frog1').css('margin-left', `${randomMarginLeft}`)
        $('#frog1').css('font-size', `${randomFontSize}`)
    
    
    }


    const game2 = function () {

        $("#container").empty()
        $("#container").append(`
        <h1 class="header">Time Left <div id="timer"></div></h1>
        <div class="instruction"></div>        
                <div  class="box"><i  id="frog1"class="fas fa-frog"></i></div> 
                <div  class="box"><i  id="frog2"class="fas fa-frog"></i></div> 
                <div class="frogLeftBox">frogs left - ${frogLeft}</div>
                <div class="Catch">Catch it!</div>
                <div class="level">level-${level}</div>`)
        const randomMarginTop = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft = Math.floor((Math.random() * 90) + 1) + '%'
        const randomFontSize = Math.floor((Math.random() * 5) + 1) + 'em'
        $('#frog1').css('margin-top', `${randomMarginTop}`)
        $('#frog1').css('margin-left', `${randomMarginLeft}`)
        $('#frog1').css('font-size', `${randomFontSize}`)
        const randomMarginTop2 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft2 = Math.floor((Math.random() * 90) + 1) + '%'
        const randomFontSize2 = Math.floor((Math.random() * 5) + 1) + 'em'
        $('#frog2').css('margin-top', `${randomMarginTop2}`)
        $('#frog2').css('margin-left', `${randomMarginLeft2}`)
        $('#frog2').css('font-size', `${randomFontSize2}`)
    
    }


    const game3 = function () {

        $("#container").empty()
        $("#container").append(`
        <h1 class="header">Time Left <div id="timer"></div></h1>
        <div class="instruction"></div>        
                <div  class="box"><i  id="frog1" class="fas fa-frog"></i></div> 
                <div  class="box"><i  id="frog2" class="fas fa-frog"></i></div> 
                <div  class="box"><i  id="frog3" class="fas fa-frog"></i></div> 
                <div class="frogLeftBox">frogs left - ${frogLeft} </div>
                <div class="Catch">Catch it!</div>
                <div class="level">level-${level}</div>`)
        const randomMarginTop = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft = Math.floor((Math.random() * 90) + 1) + '%'
        const randomFontSize = Math.floor((Math.random() * 5) + 1) + 'em'
        $('#frog1').css('margin-top', `${randomMarginTop}`)
        $('#frog1').css('margin-left', `${randomMarginLeft}`)
        $('#frog1').css('font-size', `${randomFontSize}`)
        const randomMarginTop2 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft2 = Math.floor((Math.random() * 90) + 1) + '%'
        const randomFontSize2 = Math.floor((Math.random() * 5) + 1) + 'em'
        $('#frog2').css('margin-top', `${randomMarginTop2}`)
        $('#frog2').css('margin-left', `${randomMarginLeft2}`)
        $('#frog2').css('font-size', `${randomFontSize2}`)
        const randomMarginTop3 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft3 = Math.floor((Math.random() * 90) + 1) + '%'
        const randomFontSize3 = Math.floor((Math.random() * 5) + 1) + 'em'
        $('#frog3').css('margin-top', `${randomMarginTop3}`)
        $('#frog3').css('margin-left', `${randomMarginLeft3}`)
        $('#frog3').css('font-size', `${randomFontSize3}`)
    }

    
const game4 = function () {

    $("#container").empty()
    $("#container").append(`
    <h1 class="header">Time Left <div id="timer"></div></h1>
    <div class="instruction"></div>        
            <div  class="box"><i  id="frog1" class="fas fa-frog"></i></div> 
            <div  class="box"><i  id="frog2" class="fas fa-frog"></i></div> 
            <div  class="box"><i  id="frog3" class="fas fa-frog"></i></div> 
            <div  class="box"><i  id="frog4" class="fas fa-frog"></i></div> 
            <div class="frogLeftBox">frogs left - ${frogLeft}</div>
            <div class="Catch">Catch it!</div>
            <div class="level">level - ${level}</div>`)
    const randomMarginTop = Math.floor((Math.random() * 20) + 1) + '%'
    const randomMarginLeft = Math.floor((Math.random() * 90) + 1) + '%'
    const randomFontSize = Math.floor((Math.random() * 5) + 1) + 'em'
    $('#frog1').css('margin-top', `${randomMarginTop}`)
    $('#frog1').css('margin-left', `${randomMarginLeft}`)
    $('#frog1').css('font-size', `${randomFontSize}`)
    const randomMarginTop2 = Math.floor((Math.random() * 20) + 1) + '%'
    const randomMarginLeft2 = Math.floor((Math.random() * 90) + 1) + '%'
    const randomFontSize2 = Math.floor((Math.random() * 5) + 1) + 'em'
    $('#frog2').css('margin-top', `${randomMarginTop2}`)
    $('#frog2').css('margin-left', `${randomMarginLeft2}`)
    $('#frog2').css('font-size', `${randomFontSize2}`)
    const randomMarginTop3 = Math.floor((Math.random() * 20) + 1) + '%'
    const randomMarginLeft3 = Math.floor((Math.random() * 90) + 1) + '%'
    const randomFontSize3 = Math.floor((Math.random() * 5) + 1) + 'em'
    $('#frog3').css('margin-top', `${randomMarginTop3}`)
    $('#frog3').css('margin-left', `${randomMarginLeft3}`)
    $('#frog3').css('font-size', `${randomFontSize3}`)
    const randomMarginTop4 = Math.floor((Math.random() * 20) + 1) + '%'
    const randomMarginLeft4 = Math.floor((Math.random() * 90) + 1) + '%'
    const randomFontSize4 = Math.floor((Math.random() * 5) + 1) + 'em'
    $('#frog4').css('margin-top', `${randomMarginTop4}`)
    $('#frog4').css('margin-left', `${randomMarginLeft4}`)
    $('#frog4').css('font-size', `${randomFontSize4}`)
}


const game5 = function () {
    $("#container").empty()
    $("#container").append(`
    <h1 class="header">Time Left <div id="timer"></div></h1>
    <div class="instruction"></div>        
            <div  class="box"><i  id="frog1" class="fas fa-frog"></i></div> 
            <div  class="box"><i  id="frog2" class="fas fa-frog"></i></div> 
            <div  class="box"><i  id="frog3" class="fas fa-frog"></i></div> 
            <div  class="box"><i  id="frog4" class="fas fa-frog"></i></div> 
            <div  class="box"><i  id="frog5" class="fas fa-frog"></i></div> 
            <div class="frogLeftBox">frogs left - ${frogLeft}</div>
            <div class="Catch">Catch it!</div>
            <div class="level">level - ${level}</div>`)
    const randomMarginTop = Math.floor((Math.random() * 20) + 1) + '%'
    const randomMarginLeft = Math.floor((Math.random() * 90) + 1) + '%'
    const randomFontSize = Math.floor((Math.random() * 5) + 1) + 'em'
    $('#frog1').css('margin-top', `${randomMarginTop}`)
    $('#frog1').css('margin-left', `${randomMarginLeft}`)
    $('#frog1').css('font-size', `${randomFontSize}`)
    const randomMarginTop2 = Math.floor((Math.random() * 20) + 1) + '%'
    const randomMarginLeft2 = Math.floor((Math.random() * 90) + 1) + '%'
    const randomFontSize2 = Math.floor((Math.random() * 5) + 1) + 'em'
    $('#frog2').css('margin-top', `${randomMarginTop2}`)
    $('#frog2').css('margin-left', `${randomMarginLeft2}`)
    $('#frog2').css('font-size', `${randomFontSize2}`)
    const randomMarginTop3 = Math.floor((Math.random() * 20) + 1) + '%'
    const randomMarginLeft3 = Math.floor((Math.random() * 90) + 1) + '%'
    const randomFontSize3 = Math.floor((Math.random() * 5) + 1) + 'em'
    $('#frog3').css('margin-top', `${randomMarginTop3}`)
    $('#frog3').css('margin-left', `${randomMarginLeft3}`)
    $('#frog3').css('font-size', `${randomFontSize3}`)
    const randomMarginTop4 = Math.floor((Math.random() * 20) + 1) + '%'
    const randomMarginLeft4 = Math.floor((Math.random() * 90) + 1) + '%'
    const randomFontSize4 = Math.floor((Math.random() * 5) + 1) + 'em'
    $('#frog4').css('margin-top', `${randomMarginTop4}`)
    $('#frog4').css('margin-left', `${randomMarginLeft4}`)
    $('#frog4').css('font-size', `${randomFontSize4}`)
    const randomMarginTop5 = Math.floor((Math.random() * 20) + 1) + '%'
    const randomMarginLeft5 = Math.floor((Math.random() * 90) + 1) + '%'
    const randomFontSize5 = Math.floor((Math.random() * 5) + 1) + 'em'
    $('#frog5').css('margin-top', `${randomMarginTop5}`)
    $('#frog5').css('margin-left', `${randomMarginLeft5}`)
    $('#frog5').css('font-size', `${randomFontSize5}`)
}

    return {
        countDown:countDown,
        restart:restart,
        game1:game1,
        game2:game2,
        game3:game3,
        game4:game4,
        game5:game5,
    }
}

