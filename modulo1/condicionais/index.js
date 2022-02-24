
// Exercicio de interpretação 

/* Exercicio 1 

a) O codigo mostra o resto do numero dividido por 2 
e imprime no console se ele passou ou nao 

b) Os divisiveis por 2 

c) Para os que nao sao divisiveis por 2 

Exercicio 2 

a) Para vender frutas

b) O preço da fruta maçã é 2,25

c) 5 

Exercicio 3 

a) declarando e atribuindo um valor Number 

b) "Esse número passou no teste".
   "Essa mensagem é secreta".
    ira aparecer que a mensagem nao foi definida 

    Nao fiz a c por que estava dando erro e nao entendi. :(
        */
    

//Exercicio de escrita 

// Exercicio 1

let idade = Number(prompt("Qual a sua idade?"))

if(idade > 17 ){

    console.log("Voce pode dirigir!")

}else{
    console.log("Voce nao pode dirigir!");
}

// Exercicio 2 

const qualTurnoEstuda = prompt("Qual turno voce estuda? responda com M (matutino) ou V (vespertino) ou N (noturno).")

if (qualTurnoEstuda == "M"){
    console.log ("Bom dia!")

}else if (qualTurnoEstuda == "V"){
    console.log("Boa tarde!")

}else if(qualTurnoEstuda == "N"){
    console.log("Boa noite!")
}

// Exercicio 3 

let qualTurnoEstuda2 = prompt("Qual turno voce estuda? responda com M (matutino) ou V (vespertino) ou N (noturno).")

switch(qualTurnoEstuda2){
    case "M":
    console.log("Bom dia!");
    break;

    case "V":
    console.log("Boa tarde!");
    break;

    case "N":
    console.log("Boa noite!")
    break
 
}

// Exercicio 4 

const genero = prompt("Genero do filme")
const valorIngresso = Number(prompt("Valor do ingresso"))

if(genero === "fantasia" && valorIngresso < 15){

    console.log("Bom filme!")

}else{
    console.log("Escolha outro filme:(");
}



