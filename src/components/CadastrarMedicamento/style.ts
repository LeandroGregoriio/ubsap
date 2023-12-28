import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
`;

export const Form = styled.View`
    text-align: center;
`;

export const InputsInfo = styled.View`
width: 100%;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
text-align: center;
`;

export const Text = styled.Text`
    font-size: 15px;
    font-family: ${({theme})=>theme.fonts.medium};
    margin-top: 10px;
    text-align: center;
`;