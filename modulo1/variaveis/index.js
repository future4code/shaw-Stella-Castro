/*Exercicio de interpretacao de codigos

Exercicio 1. 

let a = 10
let b = 10

console.log(b) // vai imprimir 10 

b = 5 // alterou o numero da variavel b 
console.log(a, b) // vai imprimir  "10" "5"

Exercicio 2.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // Vai imprimir "10" "10" "10"

Exercicio 3.

let p = prompt("Quantas horas voce trabalha por dia?") // Horas 
let t = prompt("Quanto voce recebe por dia?") // Salario 
alert(`Voce recebe ${t/p} por hora`) 


/*Exercicio 1*/

let nome 
let idade

console.log(typeof nome) // undefined que representa a falta de valor em uma variavel//
console.log(typeof idade)
 nome = prompt("qual seu nome?")
 idade = prompt("qual sua idade?")

console.log(typeof nome)// Virou uma string
console.log(typeof idade)// Virou uma string 

console.log("Olá", nome, "voce tem", idade, "anos")

/*Exercicio 2*/

let perg1 = prompt("VocÊ gosta de sorvete?")
let perg2 = prompt("VocÊ passa raiva programando?")
let perg3 = prompt("VocÊ acorda cedo?")

console.log("VocÊ gosta de sorvete? -", perg1)
console.log("VocÊ passa raiva programando? -", perg2)
console.log("VocÊ acorda cedo? -", perg3)

/*Exercicio 3*/

let a = 10 
let b = 25

 c = a 
 a = b 
 b = c 
  console.log("O novo valor de a é", a) 
  console.log("O novo valor de b é", b)
