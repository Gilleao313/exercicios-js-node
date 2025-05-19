/*
Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/
const prompt = require ("prompt-sync")()

let numero = Number (prompt("Infome um número inteiro: "))

if(numero % 2 === 0){
    console.log ("\nEste númeo é par! ")
}
if(numero % 2 !== 0){
    console.log("\nEste número é impar! ")
}