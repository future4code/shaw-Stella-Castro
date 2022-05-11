import react from "react";
import { useNavigate } from "react-router-dom";
import {goToLoginPage} from "../../Router/coordinator";

const FeedPage = () => {
    const navigate = useNavigate()
    return (
      <div >
        FeedPage
        <button onClick={()=> goToLoginPage(navigate)}>Logout</button>
        <hr/>
        <br/>
        <br/>
        <input type="text" placeholder="Faça uma pergunta ou escreva uma mensagem."/>
        <br/>
        <button>Postar</button>
        <hr/>
        
      </div>
    )
  }
  
  export default FeedPage;
