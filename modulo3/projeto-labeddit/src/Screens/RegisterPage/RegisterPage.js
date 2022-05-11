import react from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Router/coordinator";
import { goToFeedPage } from "../../Router/coordinator";

const RegisterPage = () => {
  const navigate = useNavigate()
    return (
      
      <div >
        RegisterPage
        
        <hr/>
        <br/>
        <br/>
        <input type="text" name="Nome" placeholder="Nome de usuário"/>
        <br/>
        <input type="text" name="Email" placeholder="E-mail"/>
        <br/>
        <input type="text" name="Nome" placeholder="Senha"/>
        <br/>
        <button onClick={()=> goToFeedPage(navigate)}>Cadastrar</button>
        <button onClick={()=> goBack(navigate)}>Voltar</button>
      </div>
    )
  }
  
  export default RegisterPage;