function calculatePointsAvereage () {
    const gameStats = {
        gameOne: parseInt(document.querySelector("#game-one").value),
        gameTwo: parseInt(document.querySelector("#game-two").value),
        gameThree: parseInt(document.querySelector("#game-three").value),
        gameFour: parseInt(document.querySelector("#game-four").value),
        gameFive: parseInt(document.querySelector("#game-five").value),
        gameSix: parseInt(document.querySelector("#game-six").value),
        gameSeven: parseInt(document.querySelector("#game-seven").value),
        gameEight: parseInt(document.querySelector("#game-eight").value),
        gameNine: parseInt(document.querySelector("#game-nine").value),
        gameTen: parseInt(document.querySelector("#game-ten").value)
    };
    let totalPoints = 0;
    for (let stats of Object.values(gameStats)) {
        totalPoints += stats;
    }
    let averagePoints = totalPoints / Object.keys(gameStats).length
    document.querySelector("#points").innerHTML = `Average Points Scored: ${averagePoints}`
    return averagePoints
}

let btn = document.getElementById("pts-submit-btn");

btn.addEventListener("click", calculatePointsAvereage)