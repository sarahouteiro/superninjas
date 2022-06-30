import React from "react";
import { Select, CaixaCadastrar, Box } from "./styled";

export default class Cadastrar extends React.Component {
    render() {
        return(
            <Box>
                <CaixaCadastrar>
                    <h1> Cadastre o seu serviço </h1>
                    <input placeholder="Título"/>
                    <input placeholder="Descrição"/>
                    <input placeholder="Preço"/>
                    <Select>
                        <option value="" disabled selected hidden>Formas de Pagamento</option>
                        <option value="credito">Cartão de Crédito</option>
                        <option value="debito">Cartão de Débito</option>
                        <option value="boleto">Boleto</option>
                        <option value="paypal">Paypal</option>
                        <option value="pix">Pix</option>
                    </Select>
                    <input type='date' placeholder="Preço"/>
                    <button>Cadastrar</button>
                </CaixaCadastrar>
            </Box>
        )
    }
}