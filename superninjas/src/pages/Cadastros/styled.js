import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 100%;
    display: grid;
    justify-content: center;
`
export const InputsFiltros = styled.div`
    margin-top: 20px;
    input {
        margin-left: 10px;
        margin-right: 10px;
        width: 300px;
        height: 25px;
        border: none;
        border-radius: 20px;
        padding-left: 20px;
    }
    select {
        margin-left: 10px;
        width: 300px;
        height: 30px;
        border-radius: 20px;
        border: none;
        padding-left: 20px;
        cursor: pointer;
    }
`

export const Lista = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`