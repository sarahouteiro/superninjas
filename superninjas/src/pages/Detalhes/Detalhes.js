import React from "react";
import { Top, CardDetalhes } from '../Detalhes/styled';


export default class Detalhes extends React.Component {
    render() {
        return(
            <Top>
                <CardDetalhes>
                    <h2>Título</h2>
                    <p>Formas de Pagamento</p>
                    <p>Até 'Data' por 'Valor'</p>
                    <p>Descrição</p>
                    <button>Adicionar ao carrinho</button>
                    <button>Voltar para lista</button>
                </CardDetalhes>
            </Top>
        )
    }
}