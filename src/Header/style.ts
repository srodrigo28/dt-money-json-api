import styled from "styled-components";

export const Container = styled.div`
    color: #fff;
    width: 100%;
    height: 150px;
    background-color: darkviolet;

`

export const ToggleMenu = styled.button`
    width: 50px;
    height: 50px;

    border-radius: 5px;
    font-size: 22px;

    background-color: ${props => props.theme.colors.warning};

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: black;
        color: #fff;

    }
    
`