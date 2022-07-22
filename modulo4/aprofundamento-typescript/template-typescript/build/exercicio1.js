let minhaString = "Hello World";
let meuNumero = 5;
var CoresArcoiris;
(function (CoresArcoiris) {
    CoresArcoiris[CoresArcoiris["Vermelho"] = 0] = "Vermelho";
    CoresArcoiris[CoresArcoiris["Laranja"] = 1] = "Laranja";
    CoresArcoiris[CoresArcoiris["Amarelo"] = 2] = "Amarelo";
    CoresArcoiris[CoresArcoiris["Verde"] = 3] = "Verde";
    CoresArcoiris[CoresArcoiris["Azul"] = 4] = "Azul";
    CoresArcoiris[CoresArcoiris["Indigo"] = 5] = "Indigo";
    CoresArcoiris[CoresArcoiris["Violeta"] = 6] = "Violeta";
})(CoresArcoiris || (CoresArcoiris = {}));
let pessoa1 = {
    nome: "Stella",
    idade: 21,
    corFavorita: CoresArcoiris.Vermelho
};
let pessoa2 = {
    nome: "Leonardo",
    idade: 23,
    corFavorita: CoresArcoiris.Azul
};
let pessoa3 = {
    nome: "Isa",
    idade: 25,
    corFavorita: CoresArcoiris.Violeta
};
//# sourceMappingURL=exercicio1.js.map