import styled from "styled-components/native";

export const Container = styled.View`

width: 100%;
height: 20%;
background-color: white;
position: absolute;
bottom: 0;
border-radius: 10px;
padding: 10px;
`;

export const Text = styled.Text`
    font-size: 15px;
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.semibold};
    text-align: center;
`;

export const Buttons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Modal = styled.View`
flex: 1;
background-color: 'rgba(0, 0, 0, 0.5)';
`;