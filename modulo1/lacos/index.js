
// Exercicio de escrita 

// Exercicio 1

let animais = Number(prompt("Quantos animais de estimação voce tem?"))
let pets = []
let contagem = 0 

if(animais === 0){
    console.log("Que pena! Voce pode adotar um pet!")
}
if (animais > 0){
    while(contagem < animais){	

        let nomeDosPets = prompt("Digite o nome dos seus pets:")
        pets.push(nomeDosPets)
        contagem ++

 }console.log(pets)
}
 
// Exercicio 2 

let arrayOriginal = [10, 15, 20, 25, 30]
 
function imprimeArray(){
    console.log(arrayOriginal)
}
imprimeArray()

function dividePorDez(array){
 for (let numeros of array){
    console.log(numeros / 10)
  }
 }
 dividePorDez(arrayOriginal)

 function descobreMaiorEMenor(array){
let maior = array[0]
let menor = array[0]
for(numeros of array){
    if(numeros > maior){
        maior = numeros
    }
    if(numeros < menor){
        menor = numeros
    }
}
console.log(maior)
console.log(menor)
}
descobreMaiorEMenor(arrayOriginal)

function restoArray (array){
    let novaArray = []
    let numeros
for (numeros of array){
    if (numeros % 2 === 0){
        novaArray.push(numeros)
    }
}    
console.log(novaArray)
}
restoArray(arrayOriginal)

      
     
 
       


