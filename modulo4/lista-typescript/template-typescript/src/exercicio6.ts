type Clientes = {cliente:string, saldoTotal:number, debitos:number[]}

const clientes:Clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function devedores(clientes:Clientes[]):Clientes[]{
    return clientes.map((cliente)=>{
        const acumulado = cliente.debitos.reduce(
            function(acumulado, numero){
                return acumulado + numero
            }, 0)
        cliente.saldoTotal -=acumulado
        return cliente
    }).filter((cliente)=>{
        cliente.debitos = []
        return cliente.saldoTotal < 0
    })
}

console.log(devedores(clientes))