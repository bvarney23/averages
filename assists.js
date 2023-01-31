function calculateAssistsAvereage () {
    const gameStats = {
        gameOne: parseInt(document.querySelector("#assist-one").value),
        gameTwo: parseInt(document.querySelector("#assist-two").value),
        gameThree: parseInt(document.querySelector("#assist-three").value),
        gameFour: parseInt(document.querySelector("#assist-four").value),
        gameFive: parseInt(document.querySelector("#assist-five").value),
        gameSix: parseInt(document.querySelector("#assist-six").value),
        gameSeven: parseInt(document.querySelector("#assist-seven").value),
        gameEight: parseInt(document.querySelector("#assist-eight").value),
        gameNine: parseInt(document.querySelector("#assist-nine").value),
        gameTen: parseInt(document.querySelector("#assist-ten").value)
    };
    let totalAssist = 0;
    for (let stats of Object.values(gameStats)) {
        totalAssist += stats;
    }
    let averageAssist = totalAssist / Object.keys(gameStats).length
    document.querySelector("#assists").innerHTML = `Average Assists: ${averageAssist}`
    return averageAssist
}

let astBtn = document.getElementById("ast-submit-btn");

astBtn.addEventListener("click", calculateAssistsAvereage)