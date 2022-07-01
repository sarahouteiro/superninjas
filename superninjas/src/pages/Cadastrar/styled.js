import styled from "styled-components";

export const Box = styled.div`
margin-top: 150px;
`

export const CaixaCadastrar = styled.div`
padding: 50px;
margin: 0 auto;
text-align: center;
display: flex;
flex-direction: column;
width: 400px;
color: #0f3e65;
background-color: #8E9FBC;
border-radius: 20px;
    h1 {
        padding-bottom: 30px;
        color: #0f3e65;
        margin: 0px;
    }
    input {
        margin: 5px;
        height: 30px;
        padding-left: 10px;
        border: none;
        border-radius: 20px;
    }
    button {
        height: 35px;
        border: none;
        border-radius: 20px;
        margin-top: 30px;
        width: 380;
        background-color: #0f3e65;
        transition: all 0.5s ease-in-out;
        color: white;
        &:hover {
            background-color: #F1A85B;
            cursor: pointer;
            -webkit-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
            -moz-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
            box-shadow: 3px 4px 18px -3px rgba(255,255,255,1)
        }
    }
`
export const Select = styled.select`
    margin-top: 8px;
    margin-bottom: 8px;
    height: 35px;
    width: 390px;
    margin-left: 5px;
    padding-left: 8px;
    border: none;
    border-radius: 20px;
`
