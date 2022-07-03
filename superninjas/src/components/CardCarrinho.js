import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 50px;
`
const CardProduto = styled.div`
    display: flex;
    background-color: #8e9fbc;
    padding: 35px;
    margin: 50px;
    border-radius: 20px;
    justify-content: space-between;
    color: #0f3e65;
    button {
        margin-top: 10px;
        height: 40px;
        border: none;
        border-radius: 20px;
        padding-left: 20px;
        padding-right: 20px;
        transition: all 0.5s ease-in-out;
        color: #0f3e65;
        &:hover {
            background-color: #F1A85B;
            cursor: pointer;
            -webkit-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
            -moz-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
            box-shadow: 3px 4px 18px -3px rgba(255,255,255,1)
        }
    }
`

export default class CardCarrinho extends React.Component {
    render() {
        return(
            <Container>
                <CardProduto>
                    <p>produto</p>
                    <p>Valor</p>
                    <button>Remover</button>
                </CardProduto>
            </Container>
        )
    }
}