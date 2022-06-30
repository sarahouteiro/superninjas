import React from "react";
import { BodyHome, ButtonsBody } from "./styled";
import logo from '../../assets/images/superninjas.png';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <BodyHome>
                    <h1>SuperNinjas</h1>
                    <img src={logo} alt='Logo do SuperNinjas'/>
                    <h3>O talento certo no momento certo!</h3>
                    <ButtonsBody>
                        <button><b>Quero ser um SuperNinja</b></button>
                        <button><b>Contratar um SuperNinja</b></button>
                    </ButtonsBody>
                </BodyHome>
            </div>
        )
    }
}