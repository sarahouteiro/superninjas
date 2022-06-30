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
  }
  }
`
export const ButtonsBody = styled.div`
    margin-top: 50px;
`