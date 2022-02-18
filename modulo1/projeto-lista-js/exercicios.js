// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
soma()

// EXERCÍCIO 0B
function imprimeMensagem() {
const mensagem = prompt("Digite uma mensagem!")

  console.log(mensagem)
}
imprimeMensagem()

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
 function calculaAreaRetangulo(){
  let altura = Number(prompt("Insira o valor da altura:"))
  let largura = Number(prompt("Insira o valor da largura:"))
  let area = altura * largura 

  console.log(area)
}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
 let anoAtual = Number(prompt("Digite o ano atual:"))
 let anoNascimento = Number(prompt("Digite o seu ano de nascimento:"))
 let idade = anoAtual - anoNascimento
 console.log(idade)

}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  imc = peso /(altura*altura);
  return imc;
}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
 
  const nome =  prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite seu e-mail:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  corFav1 = prompt("Digite sua primeira cor favorita:")
  corFav2 = prompt("Digite sua segunda cor favorita:")
  corFav3 = prompt("Digite sua terceira cor favorita:")
  cores =[corFav1, corFav2, corFav3]
  console.log(cores)
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  string.toUpperCase()

  return string.toUpperCase()
} 


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  aTerra = custo / valorIngresso

  return aTerra
}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  compararString = string1.length 
  compararString2 = string2.length

  return compararString === compararString2
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
 let retorna  = array[0]
 return(retorna)




// EXERCÍCIO 10
function retornaUltimoElemento(array){
  
  retorna2 = array.length
  return array[retorna2 - 1]

}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  funcao1 = string1.toLowerCase()
  funcao2 = string2.toLowerCase()

  return funcao1 === funcao2


return funcao1 === funcao2
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
