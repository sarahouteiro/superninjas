import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import logo from './assets/images/superninjas.png'

const GlobalStyled = createGlobalStyle `
  body {
    margin: 0;
  }
`
const Header = styled.header`
background-color: #BB94D4;
padding: 20px;
display: flex;
justify-content: space-between;
 img {
  height: 100px;
  padding-left: 30px;
 }
 button {
  margin-top: 40px;
  margin-left: 5px;
 }
`
const Buttons = styled.div`
margin-right: 50px;
`
const BodyHome = styled.div`
  text-align: center;
  margin-top: 200px;
`


export default class App extends React.Component {
  render() {
    return(
      <div>
        <GlobalStyled/>
        <Header>
          <img src={logo} alt='Logo do Superninjas'/>
          <Buttons>
            <button>home</button>
            <button>carrinho</button>
          </Buttons>
        </Header>
        <BodyHome>
          <h1>SuperNinjas</h1>
          <h3>O talento certo no momento certo!</h3>
          <button>Quero ser um SuperNinja</button>
          <button>Contratar um SuperNinja</button>
        </BodyHome>
      </div>
    );
  }
};
