function calculateReboundAvereage () {
    const gameStats = {
        gameOne: parseInt(document.querySelector("#rebound-one").value),
        gameTwo: parseInt(document.querySelector("#rebound-two").value),
        gameThree: parseInt(document.querySelector("#rebound-three").value),
        gameFour: parseInt(document.querySelector("#rebound-four").value),
        gameFive: parseInt(document.querySelector("#rebound-five").value),
        gameSix: parseInt(document.querySelector("#rebound-six").value),
        gameSeven: parseInt(document.querySelector("#rebound-seven").value),
        gameEight: parseInt(document.querySelector("#rebound-eight").value),
        gameNine: parseInt(document.querySelector("#rebound-nine").value),
        gameTen: parseInt(document.querySelector("#rebound-ten").value)
    };
    let totalRebounds = 0;
    for (let stats of Object.values(gameStats)) {
        totalRebounds += stats;
    }
    let averageRebounds = totalRebounds / Object.keys(gameStats).length;
    document.querySelector("#rebounds").innerHTML = `Average Rebounds: ${averageRebounds}`;
    return averageRebounds;
}

let rebBtn = document.getElementById("reb-submit-btn");

rebBtn.addEventListener("click", calculateReboundAvereage);