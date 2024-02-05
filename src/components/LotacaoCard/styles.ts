import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons'; 


interface Props{
    type:'não está vazia' | 'quase cheia' | 'cheia' | 'vazia';
}

export const Container = styled.View`
    background-color: white;
    flex-direction: row;
    width: 100%;
    height: 77px;
    text-align: center;
    align-items: center;
    margin-top: 20px;
    border-radius: 10px;
`;

export const TitleColor = styled.Text<Props>`
    color: ${({theme, type})=> type==='vazia' ? theme.colors.azul: type==='não está vazia' ? theme.colors.verde : type==='quase cheia' ? theme.colors.amarelo: theme.colors.vermelho };
    font-size: 16px;
    font-family: ${({theme})=>theme.fonts.semibold};
`;


export const Msg = styled.Text`
    color: ${({theme})=> theme.colors.text}; 
    font-family: ${({theme})=>theme.fonts.medium}; 
    font-size: 12px;
`;


export const Icon = styled(Ionicons)<Props>`
    color: ${({theme, type})=> type==='vazia' ? theme.colors.azul: type==='não está vazia' ? theme.colors.verde : type==='quase cheia' ? theme.colors.amarelo: theme.colors.vermelho };
    font-size: 40px;
    margin: 20px;
`;

export const Dados = styled.View`
    
`;

export const Cor = styled.View<Props>`
    background-color: ${({theme, type})=> type==='vazia' ? theme.colors.azul: type==='não está vazia' ? theme.colors.verde : type==='quase cheia' ? theme.colors.amarelo: theme.colors.vermelho };
    width: 4%;
    height: 100%;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    
`;