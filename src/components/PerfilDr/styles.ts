import styled from "styled-components/native";


export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    background-color: white;
    height: 125px;
    margin-top: 20px;
    border-radius: 5px;
    align-items: center;
    padding: 10px 10px ;
`;

export const Nome = styled.Text`
    font-size:16px;
    color: ${({theme})=>theme.colors.tittle};
    font-family: ${({theme})=>theme.fonts.semibold};
`;

export const Especialidade = styled.Text`
    font-size:16px;
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.semibold};
`;
export const Registro = styled.Text`
    font-size:12px;
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.medium};
`;

export const Foto = styled.Image`
    height: 100%;
    width: 90px;
    border-radius: 5px;
 
`;

export const Dados = styled.View`
    flex-direction: column;
    margin-left: 20px;
    justify-content: space-around;
    height: 100%;
`;