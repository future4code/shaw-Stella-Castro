import react from "react"


export const ApplicationFormPage = () =>{
    return (
      <div>
        <header>
          <h1>Labex</h1>
        </header>
          <h1>Increva-se para uma viagem</h1>
          <input placeholder="nome" type="text"></input>
          <input placeholder="idade" type="number"></input>
          <input placeholder="texto para aplicação" type="text"></input>
          <input placeholder="profissao" type="text"></input>
          <select>colocar a seleção dos países</select>
          <button>Voltar</button>
          <button>Enviar</button>
          <container1>
              <img src="https://services.meteored.com/img/article/nova-descoberta-cinco-mil-planetas-fora-do-sistema-solar-1647991712406_1280.jpg"></img>
              
          </container1>
      </div>
    );
  }