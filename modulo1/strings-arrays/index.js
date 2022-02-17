//Exercicio de interpretacao de codigo 

// Exercicio 1 

/*let array
console.log('a. ', array) //vai imprimir "undefined"

array = null
console.log('b. ', array)// vai imprimir "null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //Vai imprimir dizendo a quantidade de itens que tem la lista

let i = 0
console.log('d. ', array[i])// vai imprimir mostrando qual o numero que esta ocupando o indice 0

array[i+1] = 19
console.log('e. ', array)// vai trocar o valor 4 que ocupa o indice 1 por 19.

const valor = array[i+6] 
console.log('f. ', valor) //vai mostrar quantos elemenstos tem a partir do indice 6*/

//Exercicio 2 

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)// O valor impresso sera: "SUBI NUM ÔNIBUS EM MIRROCOS 27"*/

//Exercicio de escrita de codigo

//Exercicio 1 

let NomeDoUsuario = prompt("Qual seu nome?")
let EmailDoUsuario = prompt("Qual seu email?")

let frase = `O e-mail ${EmailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${NomeDoUsuario}!`
console.log(frase)*/

//Exercicio 2 

let ComidasFavoritas = ["lasanha", "feijoada", "churrasco", "salgadinho", "acai",]

console.log(ComidasFavoritas)

console.log("Essas sao minhas comidas preferidas:")

console.log("lasanha")
console.log("feijoada")
console.log("churrasco")
console.log("salgadinho")
console.log("acai")

let FavComida = prompt("Dgite uma das suas comidas preferidas")
console.log(FavComida)

ComidasFavoritas[2]= FavComida
console.log(ComidasFavoritas)

//Exercicio 3 

let ListaDeTarefas = []

ListaDeTarefas = [prompt("Digite a primeira tarefa: "), prompt("Digite a segunda tarefa:" ), prompt("Digite a terceira tarefa:" )]

console.log(ListaDeTarefas)

let TarefaFeita = prompt("Digite o indice da tarefa feita")

console.log(TarefaFeita)

ListaDeTarefas.splice(TarefaFeita, 1)

console.log(ListaDeTarefas)
