import styled from "styled-components/native";


export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    background-color: white;
    height: 125px;
    margin-top: 20px;
    border-radius: 5px;
    justify-content: start;
    align-items: center;
    padding: 0px 20px 0px 20px;
`;

export const Nome = styled.Text`
    font-size:16px;
    color: ${({theme})=>theme.colors.tittle};
    font-family: ${({theme})=>theme.fonts.semibold};
`;
export const Registro = styled.Text`
    font-size:12px;
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.medium};
`;

export const Foto = styled.Image`
    height: 90px;
    width: 90px;
    border-radius: 5px;
`;

export const Dados = styled.View`
    flex-direction: column;
    text-align: center;
    margin-left: 20px;
`;