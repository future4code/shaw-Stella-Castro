// Exercicio 1 - a)

function descricaoStella(){
    console.log("Eu sou Stella, e tenho 21 anos, moro em São Vicente e sou estudante")
}

descricaoStella()

//Exercicio 1 - b)

function descricaoPessoa(nome, idade, cidade, profissao){

    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
}
 
console.log(descricaoPessoa("Stella", 21, "São Vicente", "estudante"))


// Exercicio 2 - a)

const somarNumero = function (n1, n2){
    return n1 + n2
}

console.log(somarNumero(1, 2))

// Exercicio 2 - b) 

const verificarNumero = function (n1, n2){
    return n1 >= n2
}

console.log (verificarNumero(1, 2))

// Exericio 2 - c)

const ehPar = function (n1){
    return n1 % 2 == 0
}

console.log(ehPar(1))

// Exercicio 2 - d)

const modificarTexto = function(texto){
    console.log(texto.length)
console.log(texto.length)
console.log(texto.toUpperCase())

}

let texto = "Eu nao gosto de quiabo"
modificarTexto(texto)

// Exercicio 3 

const somaUsuario = function(n1, n2){
    return n1 + n2 
}

const subUsuario = function (n1, n2){
    return n1 - n2 
}
const multUsuario = function (n1, n2){
    return n1 * n2 
}
const divUsuario = function (n1, n2){
    return n1 / n2 
}

const mostrarResultado = function(n1, n2){
    console.log(`Numeros inseridos; ${num1} e ${num2}`)
    console.log(`Soma: ${somaUsuario(num1, num2)}`)
    console.log(`Diferença: ${subUsuario(num1, num2)}`)
    console.log(`Multiplicação: ${multUsuario(num1, num2)}`)
    console.log(`Divisão: ${divUsuario(num1, num2)}`)
}
let num1 = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite outro número:"))

mostrarResultado()
