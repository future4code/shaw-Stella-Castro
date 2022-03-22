import React from 'react'; 

import styledComponents from 'styled-components';

const SmallcardContainer = styledComponents.div`
display: flex;
align-items: center;
border: 1px solid black;
margin-bottom: 10px;
gap: 5px;
padding: 5px;

> img {
    width: 70px;
    margin-right: 10px;
}`

function CardPequeno(props){
    return(
        <SmallcardContainer>
            <img src={ props.imagem } />
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </SmallcardContainer>
    )
    }

export default CardPequeno;