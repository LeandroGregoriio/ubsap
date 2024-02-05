import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
    width: 100%;
`;

export const Form = styled.View`
    align-items: center;
    justify-content: center;
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
    margin-top: 20px;
`;

export const Descricao = styled(TextInput)`
    background-color: white;
    height: 100px;
    border-radius: 10px;
    width: 100%;
    min-width: 48%;
    padding: 10px;
    margin-top: 10px;
`;