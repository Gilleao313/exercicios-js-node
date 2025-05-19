/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require("prompt-sync")()
let quantidade = Number(prompt("Informe a quantidade de maças que vai querer comprar: "))
let ValorTotal

if (quantidade < 12){
    ValorTotal = quantidade * 0.30
    console.log("O valor de suas compras é: " + ValorTotal.toFixed(2))

} else if (quantidade >= 12){
    ValorTotal = quantidade * 0.25 
    console.log("O valor de suas compras é: " + ValorTotal.toFixed(2))

}