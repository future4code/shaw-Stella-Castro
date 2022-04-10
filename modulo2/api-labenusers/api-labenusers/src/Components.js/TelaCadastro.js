import axios from 'axios'
import React from 'react'

export default class TelaCadastro extends React.Component{
    state = {
        nome: "",
        email: ""
    }

    HandleName = (event) => {
        this.setState({nome: event.target.value})
    }

    HandleEmail = (event) => {
        this.setState({email: event.target.value})
    }
    FazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const bory = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, bory, {
            Headers:{
                Authorization: "stella-neves-shaw"
            }

        })
        .then((res)=>{
            alert("Usuario(a) cadastrado(a) com sucesso!")
        })
        .catch((err)=>{
            alert(err.response.data.menssage)
            
        })
    }
      

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista de usuários</button>
                <h2>Cadastro</h2>
                <input
                 placeholder={"Nome"}
                 value={this.setState.nome}
                 onChange={this.HandleName}
                 />

                <input
                 placeholder={"E-mail"}
                 value={this.setState.email}
                 onChange={this.HandleEmail}
                 />
                <button onClick={this.FazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}
