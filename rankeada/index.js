const prompt = require("prompt-sync")({ sigint: true });

function calculaSaldoRank() {
    let vitorias = prompt();
    let derrotas = prompt();

    let rank = "";

    do {
        if (vitorias <= 10) {
            rank = "Ferro";
        } else if (vitorias <= 20) {
            rank = "Bronze";
        } else if (vitorias <= 50) {
            rank = "Prata";
        } else if (vitorias <= 80) {
            rank = "Ouro";
        } else if (vitorias <= 90){
            rank = "Diamante";
        } else if (vitorias <= 100){
            rank = "Lendário";
        } else {
            rank = "Imortal";
        }
    } while (rank === "");

    let saldoVitorias = vitorias - derrotas;
    console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de " + rank);

}

calculaSaldoRank();