import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'; 


export const Container = styled.View`
    background-color: white;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin-top: 10px;
`;

export const Dados = styled.View`
   max-width: 80%;
   padding: 5px;
`;
export const Title = styled.Text`
      font-size: 16px;
      font-family: ${({theme})=>theme.fonts.semibold};
      color: ${({theme})=>theme.colors.tittle};

`;
export const Msg = styled.Text`
    font-size: 12px;
    font-family: ${({theme})=>theme.fonts.medium};
    color:${({theme})=>theme.colors.text};
    width: 85%;
    flex-wrap: wrap;
 `;

 export const Cor = styled.View`
    background-color:${({theme})=>theme.colors.roxo};
    width: 4%;
    height: 100%;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
 `;

 export const Icon = styled(Feather)`
    font-size: 40px;
    color: ${({theme})=>theme.colors.roxo};
    margin: 20px;
 `;