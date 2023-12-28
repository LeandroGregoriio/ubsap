import styled from "styled-components/native";


export const Container = styled.View`
    
    background-color: #F7F7F7;
    width: 30%;
    height:55%;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
`;



export const Text = styled.Text`
    font-size: 15px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.text};
    
`;

export const Title = styled.Text`
    font-size: 15px;
    font-family: ${({theme})=>theme.fonts.semibold};
    color: ${({theme})=>theme.colors.tittle};
`;