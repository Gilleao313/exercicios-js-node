/*
Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require ("prompt-sync")()

console.log("Opção 1 para passagem(ns) aerea(s): ")
console.log("Opção 2 para para passagens de onibus: ")
console.log("Opção 3 para locação de carro: ")
let opcao = Number(prompt("\nDigite uma opção acima :"))

switch (opcao) {
    
    case 1: {
        console.log("\nPassagem aerea ")
        let quantidade = Number(prompt("\nQuantas reservas quer fazer? "))
        if (quantidade > 0){
            console.log("RESERVADAS: " + quantidade + " Passagem(ns) Aerea(s)")
        }
        break;
    }
    case 2:{
        console.log("\n passagem ")
        let quantidade = Number(prompt("\nQuantas reservas quer fazer? "))
        if (quantidade > 0){
            console.log("RESERVADAS: "+ quantidade + " Passagem(ns) de onibus")
        } 
        break;
 
    }
    case 3:{
        console.log("\nLocação de carro")
        let quantidade = Number(prompt("\nQuantas reservas quer fazer? "))
        if (quantidade >0){
            console.log("RESERVADAS: "+ quantidade + " Locação(ões) de carro(s)")
        }
        break;
    }

    default:{
        console.log("\nOpção Inválida!")
    }
          
}