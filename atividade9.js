/*
Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.
*/

const prompt = require ("prompt-sync")()
let numero = 10

for (let i=1; i < 11; i++){
   console.log(numero)
   numero --
}
