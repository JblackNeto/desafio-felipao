// Desafio #1 Classificador Nível de Herói

//Variáveis para armazenar o nome e a XP do herói
let userName = "JblackNeto"
let exp = 3658

//Variável para armazenar o nível do herói
let nivel;

//Estruturas de decisão para classificar o nível do herói
if (exp <= 1000) {
nivel = "Ferro";
} else if (exp = 1001 && exp <= 2000){
    nivel = "Bronze";
}else if (exp = 2001 && exp <= 5000){
    nivel = "Prata";
}else if (exp = 5001 && exp <= 7000){
        nivel = "Ouro";
}else if (exp = 7001 && exp <= 8000){
    nivel = "Platina";
}else if (exp = 8001 && exp <= 9000){
    nível = "Ascendente";
}else if (exp = 9001 && exp <= 10000){
    nivel = "Imortal";
}else {
    nivel = "Radiante";
}

//Mensagem de saída
console.log ("O herói de nome" + userName + " está no nível " + nivel);

