import React from "react";
import { Container, InputsFiltros, Lista } from './styled'
import CardCadastro from "../../components/CardCadastro";

export default class Cadastros extends React.Component {
    render() {
        return(
            <div>
                <Container>
                    <InputsFiltros>
                        <input placeholder="Valor mínimo"/>
                        <input placeholder="Valor máximo"/>
                        <input placeholder="Título"/>
                        <select>
                            <option value='' disabled selected>Ordernar por...</option>
                            <option value='menor'>Valor mínimo</option>
                            <option value='maior'>Valor Máximo</option>
                            <option value='title'>Título</option>
                            <option value='dueData'>Data</option>
                        </select>
                    </InputsFiltros>
                </Container>
                <Lista>
                    <CardCadastro/>
                    <CardCadastro/>
                    <CardCadastro/>
                    <CardCadastro/>
                    <CardCadastro/>
                    <CardCadastro/>
                    <CardCadastro/>
                    <CardCadastro/>
                </Lista>
            </div>
        )
    }
}