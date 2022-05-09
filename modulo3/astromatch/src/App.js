import React,{useEffect , useState}from "react"; 
import styled from "styled-components"
import Match from "./components/match"
import Cabeca from "./components/cabeça";

const Container = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
align-content: center;
`

function App() {
  return (
    <Container>
      <Match/>
    </Container>
  );
}

export default App;