const Renderer = function () {
    const StartScreen = function (posts) {
        $("#container").empty()
        $("#container").append(`<h1 class="header">Frog Game</h1>

        <div class="instruction">Catch the moving frog</i><br>as fast as you can<br>Click start to play</div>
        
        <div class="box"></div>
        <div class="frogLeftBox"><i id="frogStart"class="fas fa-frog"></i></div>
        <div class="start">start</div>
        <div class="level"><i id="frogStart"class="fas fa-frog"></i></div>`)
        
        
    }
    return {
        StartScreen:StartScreen
    }
    


}
Renderer()








