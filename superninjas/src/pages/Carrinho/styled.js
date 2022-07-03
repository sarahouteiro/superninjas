import styled from "styled-components";

export const FecharValor = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 150px;
    padding-right: 120px;
    margin-top: 10px;
    p {
        color: #0f3e65;
    }
    button {
        margin-top: 5px;
        padding-left: 20px;
        padding-right: 20px;
        height: 40px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
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