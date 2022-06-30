import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
    body {
    margin: 0;
    background-color: #c3cbd8;
    font-family: 'Roboto', sans-serif;
  }
`
export const Header = styled.header`
background-color: #8E9FBD;
padding: 20px;
display: flex;
justify-content: space-between;
 img {
  height: 100px;
  padding-left: 30px;
 }
 button {
  margin-top: 40px;
  margin-left: 5px;
  color: #1A4165;
  padding: 0 30px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #F1A85B;
    cursor: pointer;
  }
 }
`
export const Buttons = styled.div`
    margin-right: 50px;
    button {
        margin-right: 5px;
        height: 30px;
        border: none;
        border-radius: 20px;
 }
`