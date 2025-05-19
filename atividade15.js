/*
Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci
utilizando um loop for.
*/
const prompt = require ("prompt-sync")()
console.log("Estes são os 10 primeiros números da sequência de Fibonacci:");

let a = 0
let b = 1
let proximo

console.log("Os 10 primeiros números da sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(a)
    proximo = a + b
    a = b
    b = proximo
}

