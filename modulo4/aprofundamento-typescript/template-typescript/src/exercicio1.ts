//a)

let minhaString:string = "Hello World"; 

//Type 'number' is not assignable to type 'string'.ts(2322

//b)

let meuNumero:number = 5; 

// Type 'string' is not assignable to type 'number'.ts(2322

//c) e d)

enum CoresArcoiris {
    Vermelho, 
    Laranja, 
    Amarelo, 
    Verde, 
    Azul,
    Indigo, 
    Violeta

}


type Pessoa = {
    nome:string,
    idade:number, 
    corFavorita: CoresArcoiris
}

let pessoa1:Pessoa = {
    nome: "Stella", 
    idade: 21,
    corFavorita: CoresArcoiris.Vermelho
}

let pessoa2:Pessoa = {
    nome: "Leonardo", 
    idade: 23,
    corFavorita: CoresArcoiris.Azul
}

let pessoa3:Pessoa = {
    nome: "Isa", 
    idade: 25,
    corFavorita: CoresArcoiris.Violeta
} 