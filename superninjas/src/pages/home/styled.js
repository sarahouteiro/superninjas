import styled, { createGlobalStyle } from "styled-components";

export const BodyHome = styled.div`
  text-align: center;
  margin-top: 200px;
  color: #1A4165;
  img {
    height: 200px
  }
  button {
    height: 30px;
    margin: 10px;
    border: none;
    border-radius: 20px;
    padding: 0px 30px;
    color: #1A4165;
    transition: all 0.5s ease-in-out;
    &:hover {
        background-color: #F1A85B;
        cursor: pointer;
        -webkit-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
        -moz-box-shadow: 3px 4px 18px -3px rgba(255,255,255,1);
        box-shadow: 3px 4px 18px -3px rgba(255,255,255,1)
  }
  }
`
export const ButtonsBody = styled.div`
    margin-top: 50px;
`