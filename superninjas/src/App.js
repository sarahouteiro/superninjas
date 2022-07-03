import React from 'react';
import { GlobalStyled, Header, Buttons} from './styled'
import logo from './assets/images/superninjas.png'
import Carrinho from './pages/Carrinho/Carrinho'

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
        <Carrinho/>
      </div>
    );
  }
};
