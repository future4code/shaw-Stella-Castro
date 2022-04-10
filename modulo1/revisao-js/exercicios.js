// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

//const array = [5, 8, 2, 4]

//function retornaTamanhoArray(array) {
 //return array.length

//}


// EXERCÍCIO 02
//const inverte = [7, 9, 10, 3]

//function retornaArrayInvertido(array) {
 // return array.reverse()
//}



// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
  const ordem = array.sort((a, b) => a - b);
  return ordem
}



// EXERCÍCIO 04
novoArray = [1,2,3,4,5,6,7,8]

function retornaNumerosPares(array) {
  const novoArray = array.filter((numero) => {
    return numero % 2 === 0;
  });
  return novoArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const numeroParElevado = numero => {
    return numero % 2 === 0 
  }
  let paresElevado = array.filter(numeroParElevado)
  return paresElevado
}

// EXERCÍCIO 06

function retornaMaiorNumero(array) {
return Math.max.apply(Math, array)

}
   
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
const resultadoMaior = Math.max(num1, num2)
const resultadoDividir = Math.max(num1, num2) % Math.min(num1, num2) === 0 
const diferenca = Math.max(num1, num2) - Math.min(num1, num2)
const objeto = {
  maiorNumero: resultadoMaior, 
  maiorDivisivelPorMenor: resultadoDividir,
  diferenca: diferenca,
}
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = [];
   for(let i = 0; array.length < n; i++){
     if (i % 2 == 0){
       numerosPares.push(i);
     }
   }
   return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {


}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}