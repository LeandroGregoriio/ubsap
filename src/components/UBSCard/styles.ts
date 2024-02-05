import styled from "styled-components/native";


interface Props{
    type : 'aberta' | 'fechada';
}


export const Container = styled.TouchableOpacity`
    background-color: white;
    width: 100%;
    border-radius: 10px;
    padding: 5%;
    margin-top: 5%;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.05);
`;


export const NameIcon = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;


export const Header = styled.View`
    flex-direction: row; 
    align-items : center ;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.tittle};
    font-size:16px;
`;

export const Estado = styled.Text<Props>` 
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme, type})=> type==='fechada' ? theme.colors.vermelho : theme.colors.verde};
    font-size:16px;
`;

export const Times = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.text};
    font-size:14px;
`;


export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
`;

export const Horarios = styled.View`
    flex-direction: column;
    justify-content: space-between;
    margin: 0px 12px 0px 12px ;
    margin-top: 24px;
`;