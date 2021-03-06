import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerSecondario = styled.div`
  color: white;
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
const Titulo2 = styled.h1`
margin-top: 10vh;
margin-bottom: 10vh;
`
const VoltarCadastroPlayList = styled.button`
  width: 21vw;
  height: 8vh;
  border: none;
  background: #b90504;
  border: 2% solid;
  border-radius: 10px;
  color: #fdfdfd;
  font-size: 180%;
  font-family: Roboto;
  background: #bb1f26;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  :hover {
    background:  #990100; 
    opacity: 1px;
    border: 2% solid #d02932;
  }
  :active {
    background: #bb1f26;
    color: #fdfdfd;
    border: 2% solid #fdfdfd;
  }`

const NomeMusica = styled.p`
  font-size: 16px;
  display: inline-block;
  padding-right: 12px;
`
const BotaoDeletar = styled.button`
  background-color: #c62726;
  border: none;
  height:7vh;
  border-radius: 150px 0px 0px 150px; 
  color: white;
  &:hover {
    background:#ec6251;
    cursor: pointer;
  }`

const BotaoAdicionar = styled.button`
  background-color: #910a0d;
  border: none;
  border-radius: 0px 150px 150px 0px; 
  color: #ffffff;
  height:7vh;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  &:hover {
    background: #bb1f26;
    border: 2% solid #d02932;
    cursor: pointer;
  }
  :active {
    background: #ff7f66;
    color: #fdfdfd;
    border: 2% solid #fdfdfd;
  }
`
const BotaoSalvar = styled.button`
  background-color: #7c0000;
  border: none;
  border-radius: 0px 0px 150px 150px; 
  color: #ffffff;
  height:7vh;
  width:16vw;
  background: #a61519;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  font-size:180%;
  :hover {
    background: #ec6251;
    opacity: 1px;
    border: 2% solid #c62726;
    cursor:pointer;
  }
  :active {
    background: #d02932;
    color: #fdfdfd;
    border: 2% solid #fdfdfd;
  }`
const DeleteMusic = styled.button`
  background-color: #b30911;
  border: none;
  height:7vh;
  border-radius: 150px ;
  color: white;
  
  &:hover {
    background: #c62726;
    cursor: pointer;
  }`
const ContainerPlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content:center;
  justify-content: space-evenly;
  cursor: pointer;
  &:active {
    background-color: black;
  }`
const ContainerInputs = styled.div`
  display: block;
`
const ConteinerAddRemove = styled.div`
display:flex;
  justify-content: flex-end;
`
const PlayMusic = styled.div`
display:flex;
flex-direction: column
`
const Inputs = styled.input`
  border: none;
  border-radius: 10px;
  padding: 8px;
  margin: 8px 0;
  width: 70%;
`
const Tracks = styled.audio`
  display: flex;
  height: 36px;
  margin-bottom: 8px;
  border-radius: 8px;
  width: 450px;
`
const PlayListaNome = styled.div`
font-size:150% large;
`
export class PlayLists extends React.Component {
 
  state = {
    AllLists: [],
    nameMusic: "",
    nameArtist: "",
    urlMusic: "",
    AllTracks: []
  }

  componentDidMount() {
    this.getAllLists();
  }
  handleNameMusic = (e) => {
    this.setState({ nameMusic: e.target.value });
  };
  handleArtist = (e) => {
    this.setState({ nameArtist: e.target.value });
  };
  handleURL = (e) => {
    this.setState({ urlMusic: e.target.value });
  };
  adicionarTrack = (idPlaylist) => {
    idPlaylist === this.state.exibir
      ? this.setState({ exibir: true }) && this.setState({ exibirSalvar: true })
      : this.setState({ exibir: idPlaylist });
  };

  getAllLists = async () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`;

    try {
      const res = await axios.get(url, {
        headers: { Authorization: "stella-neves-shaw" }
      });
      this.setState({ AllLists: res.data.result.list });
    } catch (err) {
      console.log("ERROR-get = " + err.data.result.list);
    }
  };
  addMusic = async (idPLaylist) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPLaylist}/tracks`;
    const body = {
      name: this.state.nameMusic,
      artist: this.state.nameArtist,
      url: this.state.urlMusic
    };
    try {
      const res = await axios.post(url, body, {
        headers: { Authorization: "stella-neves-shaw" }
      });
      this.setState({ nameMusic: "", nameArtist: "", urlMusic: "" });
      alert(`Adicionado na Playlist`);
      console.log(res, this.state);
      this.adicionarTrack();
    } catch (err) {
      alert(err.message);
    }
  };

  exibirTracks = async (idPlaylist) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`;
    try {
      const res = await axios.get(url, {
        headers: { Authorization: "stella-neves-shaw" }
      });
      this.setState({
        AllTracks: res.data.result.tracks,
        idPlaylistSelecionada: idPlaylist
      });
    } catch (err) {
      alert(err.message);
    }
  };

  deleteMusic = (idPlaylist, id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "stella-neves-shaw"
        }
      })
      .then((res) => {
        alert("Musica deletada com sucesso!");
        this.exibirTracks();
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente mais tarde");
      });
  };

  deleteList = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "stella-neves-shaw"
        }
      })
      .then((res) => {
        alert("Lista deletada com sucesso!");
        this.getAllLists();
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente mais tarde");
      });
  };

  render() {
    const playMusic = this.state.AllTracks.map((music) => {
      return (
        <div key={music.id}>
          {`${music.artist}`}
          <Tracks src={music.url} autoplay="autoplay" controls="controls"/>

          <NomeMusica> {music.name}</NomeMusica>
          <DeleteMusic onClick={() => this.deleteMusic(music.id)}>Delete</DeleteMusic>
        </div>
      );
    });

    const playLista = this.state.AllLists.map((list) => {
      return (
        <div key={list.id}>
          <ContainerPlay
            key={list.id}
            onClick={() => this.exibirTracks(list.id)}
          >
            <p>{list.name}</p>
            <ConteinerAddRemove>
            <BotaoDeletar onClick={() => this.deleteList(list.id)}>
              Remove{" "}
            </BotaoDeletar>

            <BotaoAdicionar
              onChange={this.handleNameMusic}
              key={list.id}
              onClick={() => this.adicionarTrack(list.id)}
            >
              Adicionar 
            </BotaoAdicionar>
            </ConteinerAddRemove>
            <ContainerInputs>
              {this.state.exibir === list.id ? (
                <Inputs
                  placeholder="Nome da Musica"
                  value={this.state.nameMusic}
                  onChange={this.handleNameMusic}
                />
              ) : (
                ""
              )}
              {this.state.exibir === list.id ? (
                <Inputs
                  placeholder="Nome do Artista"
                  value={this.state.nameArtist}
                  onChange={this.handleArtist}
                />
              ) : (
                ""
              )}
              {this.state.exibir === list.id ? (
                <>
                  <Inputs
                    placeholder="Url da Musica"
                    value={this.state.urlMusic}
                    onChange={this.handleURL}
                  />

                  <BotaoSalvar onClick={() => this.addMusic(list.id)}>
                    
                    Salvar
                  </BotaoSalvar>
                </>
              ) : (
                ""
              )}
            </ContainerInputs>
          </ContainerPlay>
          {this.state.idPlaylistSelecionada === list.id ? (
            <PlayMusic>{playMusic}</PlayMusic>
          ) : (
            ""
          )}
        </div>
      );
    });

    return (
      <ContainerSecondario>
        <VoltarCadastroPlayList onClick={this.props.goCadastro}>
          Adicionar PlayList
        </VoltarCadastroPlayList>
        <Titulo2>Minhas Play Lists - Musica</Titulo2>
        <PlayListaNome>{playLista}</PlayListaNome>
      </ContainerSecondario>
    );
  }
}