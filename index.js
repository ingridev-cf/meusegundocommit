let nomeHeroi = "Eduardinho Berserker"
let resultado = calcularRank(200, 95)
let nivelHeroi

function calcularRank(numVitorias, numDerrotas){
    let saldoVitorias = numVitorias - numDerrotas
    return saldoVitorias
}

switch (true){
    case resultado <= 10:
        nivelHeroi = "Ferro"
        break
    case resultado >= 11 && resultado <= 20:
        nivelHeroi = "Bronze"
        break
    case resultado >= 21 && resultado <= 50:
        nivelHeroi = "Prata"
        break
    case resultado >= 51 && resultado <= 80:
        nivelHeroi = "Ouro"
        break
    case resultado >= 81 && resultado <= 90:
        nivelHeroi = "Diamante"
        break
    case resultado >= 91 && resultado <= 100:
        nivelHeroi = "Lendário"
        break
    case resultado >= 101:
        nivelHeroi = "Imortal"
        break
    default:
        nivelHeroi = "Desconhecido"
}

console.log("O Herói " + nomeHeroi + " tem saldo de " + resultado + " vitórias e está no nível " + nivelHeroi)
    