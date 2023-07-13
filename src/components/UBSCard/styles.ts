import styled from "styled-components/native";

interface Props{
    type : 'Aberto' | 'Fechado';
}


export const Container = styled.TouchableOpacity`
    background-color: white;
    width: 340px;
    height: 93px;
    border-radius: 10px;
    padding: 5px;
    margin-top: 12px;
`;

export const Header = styled.View`
    flex-direction: row;  
`;

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.tittle};
    margin-top: 10px;
    font-size:16px;
    
`;

export const Estado = styled.Text<Props>` 
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme, type})=> type==='Fechado' ? theme.colors.vermelho : theme.colors.verde};
    margin-top: 10px;
    font-size:16px;
`;

export const Horario = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.text};
    margin-top: 10px;
    font-size:16px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 12px 0px 12px ;
    margin-top: 24px;
`;