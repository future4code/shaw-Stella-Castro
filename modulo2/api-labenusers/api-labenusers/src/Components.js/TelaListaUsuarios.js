import React from 'react'

export default class TelaListaUsuario extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
                <h2>Lista de usuários</h2>
            </div>
        )
    }
}