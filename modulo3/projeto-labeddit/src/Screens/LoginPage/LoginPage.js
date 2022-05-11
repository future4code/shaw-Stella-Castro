import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToRegisterPage } from "../../Router/coordinator";

const LoginPage = () => {
  const navigate = useNavigate()
    return (
      <div >
        LoginPage
        <hr/>
        <br/>
        <br/>
        <input type="text" name="Nome" placeholder="Nome"/>
        <br/>
        <input type="Number" name="Senha" placeholder="Senha"/>
        <p> Não tem uma conta?
          <br/>
          <button onClick={ ()=> goToRegisterPage(navigate)}>Cadastre-se</button>
          </p>
        <button onClick={ ()=> goToFeedPage(navigate)}>Feed</button>
      </div>
    )
  }
  
  export default LoginPage;