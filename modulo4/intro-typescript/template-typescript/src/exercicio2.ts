function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3:string): Array<string> {
    const arrayCores = [] 

    arrayCores.push(cor1, cor2, cor3)
    return arrayCores
}
console.log(imprimeTresCoresFavoritas("azul", "preto", "branco"))