/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0
(ele não sabe que 0 encerra), e calcular a média aritmética desses números.
*/

const prompt = require("prompt-sync")();

let numero;
let soma = 0;
let quantidade = 0;

do {
    numero = Number(prompt("Digite um número decimal: "));

    if (numero !== 0) {
        soma += numero;
        quantidade++;
    }

} while (numero !== 0);

if (quantidade > 0) {
    let media = soma / quantidade;
    console.log("\nA média aritmética é: " + media.toFixed(2));
} else {
    console.log("\nNenhum número válido foi digitado.");
}
