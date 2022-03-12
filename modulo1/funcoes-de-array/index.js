
/*INTERPRETAÇÃO DE CÓDIGO*/

//1- a) será impresso o objeto {}, o índice [i] e o array [] de cada objeto no array.

 //2- Será impresso o novoArray, que consiste apenas nos nomes do array original. Ex: De { nome: "Amanda Rangel", apelido: "Mandi" } será levado para o novo array apenas "Amanda Rangel".

 //Será impresso no console de novoArrayC, consistirá em 2 objetos,jogo original.

/*ESCRITA DE CÓDIGO*/


// Exercício 1 - a)
const pets = [
    {nome: "Lupin", raca:"Salsicha"},
    {nome: "Polly", raca:"Lhasa Apso"},
    {nome: "Madame", raca:"Poodle" },
    {nome: "Quentinho", raca:"Salsicha" },
    {nome: "Fofo", raca:"Poodle" },
    {nome: "Caramelo", raca:"Vira-lata" },
 ]

const nomesPets = pets.map((pets) => {
    return pets.nome
})
console.log(nomesPets)

// Exercício 1 - b)

const petsSalsicha = pets.filter((pets) =>{
    return pets.raca === "Salsicha" 
})
console.log(petsSalsicha)

// Exercício 1 - c)

const mostrarMensagemPoodle = (cachorro)=>{
    if(cachorro.raca === "Poodle"){
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome} !`
    }
}
const desconto = pets.filter(mostrarMensagemPoodle).map(mostrarMensagemPoodle)

console.log(desconto)

// Exercício 2 a)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


const nomesProdutos = produtos.map((produto) => {
    return produto.nome
})
console.log(nomesProdutos)

// Exercício 2 - b)

const nomePrecoAlterado = produtos.map((valor) => {
    const novoPreco = (valor.preco - (valor.preco * 0.05)).toFixed(2)
    return { nome: valor.nome, preco: novoPreco }
})
console.log(nomePrecoAlterado)

// Exercício 2 - c) 

const produtosBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})
console.log(produtosBebidas)

// Exercício 2 - d) 

const produtosNomesYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})
console.log(produtosNomesYpe)

//Exercício 2 - e) 

const msgProdutosNomesYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
}).map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`
})
console.log(msgProdutosNomesYpe)

