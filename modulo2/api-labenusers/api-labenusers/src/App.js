import React from 'react'
import TelaCadastro from './Components.js/TelaCadastro'
import TelaListaUsuarios from './Components.js/TelaListaUsuarios'

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch(this.state.telaAtual){
      case "cadastro":
      return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
        default:
          return <div>Erro! Página não encontrada.</div>
    }
  }
  irParaCadastro = () => {
this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render(){
    return(
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}


