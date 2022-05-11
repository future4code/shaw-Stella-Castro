import React from "react";
import { useNavigate } from "react-router-dom";

 export const goToLoginPage = (navigate) =>{
    navigate ("/") // Rota para ir para login que é a pagina inicial
}

export const goToFeedPage = (navigate) =>{
navigate ("feed") // rota para ir para a pag. de registro
}

export const goToPostPage = (navigate) =>{
    navigate ("/post/:id") // rota para ir para a pag. de posts
    }

export const goToRegisterPage = (navigate) =>{
        navigate ("register") // rota para ir para a pag. de registro
        }

export const goBack = (navigate) =>{
            navigate (-1) // rota para ir para voltar
            }
            
        
    