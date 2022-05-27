var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
    GENERO["SUSPENSE"] = "suspense";
})(GENERO || (GENERO = {}));
function filmesOrganizados(nome, ano, genero, pontuacao) {
    return `nome: ${nome}, ano de lançamento: ${ano}, genero: ${genero}, pontuação: ${pontuacao}%`;
}
console.log(filmesOrganizados("Garota Exemplar", 2014, GENERO.SUSPENSE, 83));
//# sourceMappingURL=exercicio3.js.map