/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

const prompt = require ("prompt-sync")()

let nota = Number (prompt("\nDigite a sua nota (0 a 10):  "))

if(nota >=7 && nota <=10){
    console.log ("\nParabéns você está aprovado! ")
} else if (nota >=5 && nota <7){
    console.log ("\nVocê está em recuperação. ")
} else if (nota >=0 && nota <5){
    console.log ("\nAluno Reprovado")
} else {
    console.log("Nota inválida. Digite um valor entre 0 e 10.");
}