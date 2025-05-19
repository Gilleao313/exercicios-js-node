/*
Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

const prompt = require("prompt-sync")()

let idade = Number (prompt("\nInforme sua idade: "))

if(idade  >=0 && idade <=11){
    console.log("\nCriança")
} else if(idade >=12 && idade <=18){
    console.log ("\nAdolecente")
} else if (idade >=19 && idade <=59 ){
    console.log("\nAdulto")
} else if(idade >=60){
    console.log("\nIdoso")
} else{
    console.log("\nIdade invalida. ")
}