import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardGrande/CardPequeno/CardPequeno';
import imagemEmail from './components/email.png';
import imagemLocal from './components/local.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/99159201?v=4" 
          nome="Stella Castro" 
          descricao="Oi, eu sou Stella Castro. Sou estudante da Labenu no curso Web Full Stack."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem={imagemEmail}
        nome="Email"
        descricao="stella84@gmail.com"
        />

       <CardPequeno
        imagem={imagemLocal}
        nome="Local"
        descricao="São Vicente, 123"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Raro's Lanches" 
          descricao="Responsavel pelo funcionamento e organizzação do salao, atendimento via presencial e via whatsapp e ifood." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Supermercado Central" 
          descricao="Responsavel por receber compras e pagamento de contas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
