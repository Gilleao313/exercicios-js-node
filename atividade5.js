/*
 Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
 */

const prompt = require ("prompt-sync")()

let peso = Number (prompt("\nInforme seu peso: "))
let altura = Number(prompt("Informe sua altura: "))
let imc
imc = peso / (altura * altura)


if (imc < 18.5){
    console.log("\nBaixo Peso. ")

} else if(imc >=18.5 && imc <=24.9){
    console.log("\nPeso Normal. ")

}else if (imc >=25 && imc <=29.9 ){
    console.log("\nsobrepeso. ")

}else if (imc >=30){
    console.log("\nObesidade. ")

} 

console.log("\nSeu IMC é: " + imc.toFixed(2))
