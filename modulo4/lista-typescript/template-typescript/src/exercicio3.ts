enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror",
    SUSPENSE="suspense"
}

function filmesOrganizados(nome:string, ano:number, genero:string, pontuacao?:number):string{
    return `nome: ${nome}, ano de lançamento: ${ano}, genero: ${genero}, pontuação: ${pontuacao}`
}

console.log(filmesOrganizados("Garota Exemplar", 2014, GENERO.SUSPENSE, 83))