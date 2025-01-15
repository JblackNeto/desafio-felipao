//Quest: Develop a function to calculate the victory score and level of a hero.


// Function to calculate the victory score
function subtract(win, lose) {
    return win - lose;
}

// Players' list and data
const players = [
    { name: "JBlackNeto", wins: 54, losses: 52 },
    { name: "HeroMax", wins: 32, losses: 15 },
    { name: "ShadowKnight", wins: 80, losses: 50 },
    { name: "LunaBlade", wins: 105, losses: 30 }
];

// Loop to calculate the victory score and level for each player
for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const victoryScore = subtract(player.wins, player.losses);

    //Structure to define the level
    let level;
    if (victoryScore < 10) {
        level = "Iron";
    } else if (victoryScore >= 11 && victoryScore <= 20) {
        level = "Copper";
    } else if (victoryScore >= 21 && victoryScore <= 50) {
        level = "Silver";
    } else if (victoryScore >= 51 && victoryScore <= 80) {
        level = "Gold";
    } else if (victoryScore >= 81 && victoryScore <= 90) {
        level = "Diamond";
    } else if (victoryScore >= 91 && victoryScore <= 100) {
        level = "Legendary";
    } else {
        level = "Immortal";
    }

    // Show the results to the current player
    console.log(
        `The hero named ${player.name} has ${victoryScore} victories and its level is ${level}`
    );
}
