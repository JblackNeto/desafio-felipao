//Obj: Criar uma calculadora de partidas ranqueadas, onde o valor de retorno deve ser o saldo de vitórias com seu respectivo nível.

//variabilities
let userName = "JBlackNeto";
let win = 54;
let lose = 52;
let victoryScore = subtract(win, lose);

//Structure decision making
let level;
  if (victoryScore < 10) {
    level = "Iron";
  } else if (victoryScore >= 11 && victoryScore <= 20) {
    level = "Copper";
  } else if (victoryScore >= 21 && victoryScore <= 50) {
    level = "Silver";
  } else if (victoryScore >= 51 && victoryScore <= 80) {
    level = "Gold";
  } else if (victoryScore >= 81 && victoryScore<= 90) {
    level = "Diamond";
  } else if (victoryScore >= 91 && victoryScore<= 100) {
    level = "Legendary";
  } else {
    level = "Immortal";
  }

//Function
function subtract(win, lose){
    return win - lose;
}

//Execution
console.log("The hero named " + userName + " has " + victoryScore + " victories and its level is " + level);

  

  