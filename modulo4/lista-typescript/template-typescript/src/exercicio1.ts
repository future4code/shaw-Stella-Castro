function aprensentaPessoa(nome: string, data: string): string{
    const dataSeparada:string[] = data.split("/")
    return `olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano de ${dataSeparada[2]}`
}
console.log(aprensentaPessoa("Stella", "16/12/2000"))