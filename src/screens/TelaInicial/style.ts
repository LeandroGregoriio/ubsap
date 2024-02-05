import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    colors:["#1969df","#012586"]
})`
    flex: 1;
    align-items: center;
    padding: 20px;
    justify-content:center;
`;

export const Text = styled.Text`
    color: white;
    font-size: 18px;
    font-family: ${({theme})=>theme.fonts.bold};
    margin-top: 10px;
    margin-bottom: 50%;
`;

export const InputCadastro = styled.TextInput`
    background-color: white;
    height: 50px;
    margin-top: 15px; 
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
`;