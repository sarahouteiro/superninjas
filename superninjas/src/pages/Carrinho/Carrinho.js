import React from "react";
import CardCarrinho from "../../components/CardCarrinho";
import { FecharValor } from "./styled";

export default class Carrinho extends React.Component {
    render() {
        return(
            <div>
                <CardCarrinho/>
                <FecharValor>
                    <p>Total:</p>
                    <button>Contratar Serviços</button>
                </FecharValor>
            </div>
        )
    }
}