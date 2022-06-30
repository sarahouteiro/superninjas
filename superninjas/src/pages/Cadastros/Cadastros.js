import React from "react";
import { Container, InputsFiltros } from './styled'

export default class Cadastros extends React.Component {
    render() {
        return(
            <Container>
                <InputsFiltros>
                    <input/>
                    <input/>
                    <input/>
                    <select></select>
                </InputsFiltros>
            </Container>
        )
    }
}