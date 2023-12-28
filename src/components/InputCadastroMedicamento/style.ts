import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    
`;

export const Text = styled.Text`
    text-align: center;
    margin: 5px;
`;

export const Input = styled(TextInput)`
    background-color: white;
    height: 60px;
    border-radius: 20px;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
    min-width: 48%;
`;

