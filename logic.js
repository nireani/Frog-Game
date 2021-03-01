const Frogi = function () {
    const randomFontSize = function (randomMarginTop) {
 let randomMarginTopNum = (randomMarginTop.match(/\d+/)[0]);
        if (randomMarginTopNum <= 2) {
            return 1 + 'em'
        }
        else if (randomMarginTopNum <= 4) {
            return 1.5 + 'em'
        }
        else if (randomMarginTopNum <= 4) {
            return 2 + 'em'
        }
        else if (randomMarginTopNum <= 4) {
            return 2.5 + 'em'
        }
        else if (randomMarginTopNum <= 6) {
            return 3 + 'em'
        }
        else if (randomMarginTopNum <= 8) {
            return 3.5 + 'em'
        }
        else if (randomMarginTopNum <= 10) {
            return 4 + 'em'
        }
        else if (randomMarginTopNum <= 12) {
            return 4.5 + 'em'
        }
         else if (randomMarginTopNum <= 16) {
            return 5 + 'em'
        }
         else if (randomMarginTopNum <= 20)
            return 5.5 + 'em'
    }

    const  randomColor =function(){
        return '#'+Math.floor(Math.random()*16777215).toString(16); 
       }  



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
        $('#frog1').css('margin-top', `${randomMarginTop}`)
        $('#frog1').css('margin-left', `${randomMarginLeft}`)
        $('#frog1').css('font-size', `${randomFontSize(randomMarginTop)}`)
        $('#frog1').css('color', `${randomColor()}`)
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
        $('#frog1').css('margin-top', `${randomMarginTop}`)
        $('#frog1').css('margin-left', `${randomMarginLeft}`)
        $('#frog1').css('font-size', `${randomFontSize(randomMarginTop)}`)
        $('#frog1').css('color', `${randomColor()}`)


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
        $('#frog1').css('margin-top', `${randomMarginTop}`)
        $('#frog1').css('margin-left', `${randomMarginLeft}`)
        $('#frog1').css('font-size', `${randomFontSize(randomMarginTop)}`)
        $('#frog1').css('color', `${randomColor()}`)

        const randomMarginTop2 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft2 = Math.floor((Math.random() * 90) + 1) + '%'
        $('#frog2').css('margin-top', `${randomMarginTop2}`)
        $('#frog2').css('margin-left', `${randomMarginLeft2}`)
        $('#frog2').css('font-size', `${randomFontSize(randomMarginTop2)}`)
        $('#frog2').css('color', `${randomColor()}`)


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
        $('#frog1').css('margin-top', `${randomMarginTop}`)
        $('#frog1').css('margin-left', `${randomMarginLeft}`)
        $('#frog1').css('font-size', `${randomFontSize(randomMarginTop)}`)
        $('#frog1').css('color', `${randomColor()}`)

        const randomMarginTop2 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft2 = Math.floor((Math.random() * 90) + 1) + '%'
        $('#frog2').css('margin-top', `${randomMarginTop2}`)
        $('#frog2').css('margin-left', `${randomMarginLeft2}`)
        $('#frog2').css('font-size', `${randomFontSize(randomMarginTop2)}`)
        $('#frog2').css('color', `${randomColor()}`)

        const randomMarginTop3 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft3 = Math.floor((Math.random() * 90) + 1) + '%'
        $('#frog3').css('margin-top', `${randomMarginTop3}`)
        $('#frog3').css('margin-left', `${randomMarginLeft3}`)
        $('#frog3').css('font-size', `${randomFontSize(randomMarginTop3)}`)
        $('#frog3').css('color', `${randomColor()}`)

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
        $('#frog1').css('margin-top', `${randomMarginTop}`)
        $('#frog1').css('margin-left', `${randomMarginLeft}`)
        $('#frog1').css('font-size', `${randomFontSize(randomMarginTop)}`)
        $('#frog1').css('color', `${randomColor()}`)

        const randomMarginTop2 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft2 = Math.floor((Math.random() * 90) + 1) + '%'
        $('#frog2').css('margin-top', `${randomMarginTop2}`)
        $('#frog2').css('margin-left', `${randomMarginLeft2}`)
        $('#frog2').css('font-size', `${randomFontSize(randomMarginTop2)}`)
        $('#frog2').css('color', `${randomColor()}`)

        const randomMarginTop3 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft3 = Math.floor((Math.random() * 90) + 1) + '%'
        $('#frog3').css('margin-top', `${randomMarginTop3}`)
        $('#frog3').css('margin-left', `${randomMarginLeft3}`)
        $('#frog3').css('font-size', `${randomFontSize(randomMarginTop3)}`)
        $('#frog3').css('color', `${randomColor()}`)

        const randomMarginTop4 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft4 = Math.floor((Math.random() * 90) + 1) + '%'
        $('#frog4').css('margin-top', `${randomMarginTop4}`)
        $('#frog4').css('margin-left', `${randomMarginLeft4}`)
        $('#frog4').css('font-size', `${randomFontSize(randomMarginTop4)}`)
        $('#frog4').css('color', `${randomColor()}`)

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
        $('#frog1').css('margin-top', `${randomMarginTop}`)
        $('#frog1').css('margin-left', `${randomMarginLeft}`)
        $('#frog1').css('font-size', `${randomFontSize(randomMarginTop)}`)
        $('#frog1').css('color', `${randomColor()}`)
        const randomMarginTop2 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft2 = Math.floor((Math.random() * 90) + 1) + '%'
        $('#frog2').css('margin-top', `${randomMarginTop2}`)
        $('#frog2').css('margin-left', `${randomMarginLeft2}`)
        $('#frog2').css('font-size', `${randomFontSize(randomMarginTop2)}`)
        $('#frog2').css('color', `${randomColor()}`)

        const randomMarginTop3 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft3 = Math.floor((Math.random() * 90) + 1) + '%'
        $('#frog3').css('margin-top', `${randomMarginTop3}`)
        $('#frog3').css('margin-left', `${randomMarginLeft3}`)
        $('#frog3').css('font-size', `${randomFontSize(randomMarginTop3)}`)
        $('#frog3').css('color', `${randomColor()}`)

        const randomMarginTop4 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft4 = Math.floor((Math.random() * 90) + 1) + '%'
        $('#frog4').css('margin-top', `${randomMarginTop4}`)
        $('#frog4').css('margin-left', `${randomMarginLeft4}`)
        $('#frog4').css('font-size', `${randomFontSize(randomMarginTop4)}`)
        $('#frog4').css('color', `${randomColor()}`)

        const randomMarginTop5 = Math.floor((Math.random() * 20) + 1) + '%'
        const randomMarginLeft5 = Math.floor((Math.random() * 90) + 1) + '%'
        $('#frog5').css('margin-top', `${randomMarginTop5}`)
        $('#frog5').css('margin-left', `${randomMarginLeft5}`)
        $('#frog5').css('font-size', `${randomFontSize(randomMarginTop5)}`)
        $('#frog5').css('color', `${randomColor()}`)

    }

    return {
        countDown: countDown,
        restart: restart,
        randomColor:randomColor,
        game1: game1,
        game2: game2,
        game3: game3,
        game4: game4,
        game5: game5,
        randomFontSize: randomFontSize
    }
}

