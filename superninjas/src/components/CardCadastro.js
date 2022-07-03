import React from "react";
import styled from "styled-components";

const Card = styled.div`
    margin-top: 50px;
    margin-left: 25px;
    margin-right: 25px;
    background-color: #8E9FBC;
    width: 300px;
    padding: 25px;
    border-radius: 20px;
    color: #1A4165;
    text-align: center;
    -webkit-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
    -moz-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
    box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
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

export default class CardCadastro extends React.Component {
    render() {
        return(
                <Card>
                    <p>Título</p>
                    <p>Valor</p>
                    <p>Data</p>
                    <button>Adicionar no Carrinho</button>
                    <button>Detalhes</button>
                </Card>
        )
    }
}