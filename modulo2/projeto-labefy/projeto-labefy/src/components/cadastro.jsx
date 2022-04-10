import React from "react";
import axios from "axios";
import styled from "styled-components";

const FormCadastro = styled.form`
  display: flex;
  border: none;
`
const ContainerPrincipal = styled.div`
  color: white;
  text-align: center;
  background-image: url("https://jornal140.com/wp-content/uploads/2019/07/oque-e-musica-jornal-140.jpeg");
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 120vw;
  height: 100vh;
  border: none;
`
const InputPlaylist = styled.input`
  width: 40vw;
  height: 5vh;
  color: black;
  font-size: 220%;
  margin-right: 1px;
  padding: 2%;
  text-align: start;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  font-style: italic;
  font-weight: 300;
  font-size: 220%;
`
const Titulo1 = styled.h1`
margin-top: 10vh;
margin-bottom: 10vh;
`
const IrParaLista = styled.button`
  width: 35vw;
  height: 10vh;
  border: none;
  background:#b90504;
  border: 2% solid;
  border-radius: 10px;
  color: #fdfdfd;
  font-size: 3vw;
  font-family: Roboto;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  :hover {
    background: #990100;
    opacity:1px;
    border: 2% solid #d02932;
  }
  :active {
    background: #bb1f26;
    color: #fdfdfd;
    border: 2% solid #fdfdfd;
  }`

const BotaoCadastrar = styled.button`
  width: 15vw;
  height: 7,3vh;
  border: none;
  background: #910a0d;
  border: 2% solid;
  border-radius: 3%;
  color: #fdfdfd;
  font-size: 3vw;
  font-family: Roboto;
  :hover {
    background: #990100;
    border: 2% solid #d02932;
  }
  :active {
    background: #bb1f26;
    color: #fdfdfd;
    border: 2% solid #fdfdfd;
  }`

export class Cadastro extends React.Component {
  state = {
    name: ""
  };
  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  CreatePlayList = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`;
    const body = {
      name: this.state.name
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "stella-neves-shaw"
        }
      })
      .then((res) => {
        console.log("ok cadastro");
        this.setState({ name: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
  
      <ContainerPrincipal>
        <IrParaLista onClick={this.props.goListas}>Play Lists </IrParaLista>
        <Titulo1>Crie sua Playlist Labefy</Titulo1>
        <FormCadastro>
          <InputPlaylist
            placeholder="Nome da Playlist"
            value={this.state.name}
            onChange={this.handleName}
          />
          <BotaoCadastrar onClick={this.CreatePlayList}>
            Salvar
          </BotaoCadastrar>
        </FormCadastro>
      </ContainerPrincipal>
    );
  }
}