import React from "react";
import styled from "styled-components";

const Top = styled.div`
    margin-top: 200px;
`

const CardDetalhes = styled.div`
    width: 400px;
    background-color: #8e9fbc;
    padding: 30px;
    margin: 0 auto;
    border-radius: 20px;
    text-align: center;
    -webkit-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
    -moz-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
    box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
    color: #1A4165;
        button {
        height: 30px;
        margin: 5px;
        border: none;
        border-radius: 20px;
        padding: 0px 15px;
        color: #1A4165;
        transition: all 0.5s ease-in-out;
        &:hover {
            background-color: #F1A85B;
            cursor: pointer;
            -webkit-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
            -moz-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
            box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
        }
    }
`

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