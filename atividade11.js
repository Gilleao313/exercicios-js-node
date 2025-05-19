/*
Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
 */

const prompt = require("prompt-sync")()
let i
let numero
let soma = 0


for (i=0; i<5; i++){
     numero = Number(prompt ("Digite um numero: "))
     soma = soma + numero
     
    
}
console.log("A soma total é : "+ soma)