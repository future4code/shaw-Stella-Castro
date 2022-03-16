/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   
   let baralhojogador1 = comprarCarta ();
   let baralhojogador2 = comprarCarta ();
   let baralhoComputador1 = comprarCarta();
   let baralhoComputador2= comprarCarta();
   
    if(confirm("Quer iniciar uma nova rodada?")) {
      console.log("Bem-vindo(a) ao jogo de blackjack")

      let somaJogador = Number(baralhojogador1.valor) + Number(baralhojogador2.valor)
      let somaComputador = Number(baralhoComputador1.valor) + Number(baralhoComputador2.valor)

     console.log("Usuario - cartas: " +baralhojogador1.texto , baralhojogador2.texto+" - pontuacao " , somaJogador)
     console.log("Maquina - cartas: " +baralhoComputador1.texto , baralhoComputador2.texto+" - pontuacao " , somaComputador)

     if(somaJogador > somaComputador){
      console.log("O jogador ganhou!")
   } else if (somaJogador < somaComputador){
    console.log("O computador ganhou!")
   } else if(somaComputador === somaJogador){
      console.log("Empate!!")}

 } else{
    
    console.log("Fim de Jogo")
 } 
