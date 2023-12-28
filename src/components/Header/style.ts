import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 15%;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-bottom: 5%;
`;


export const Text = styled.Text`

color: ${({theme})=>theme.colors.tittle};
font-family: ${({theme})=>theme.fonts.bold};
font-size: 20px;

`;