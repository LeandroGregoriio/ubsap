import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    colors:["#1969df","#012586"]
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Inputs = styled.View`
    background-color: white;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    border-radius: 30px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
`;



export const Email = styled.View`
    justify-content: space-around;
    width: 100%;
    margin-top: 10px;
`;

export const Senha = styled.View`
    justify-content: space-around;
    width: 100%;
    margin-top: 10px;
`;

export const Text = styled.Text`
    color: black;
    font-size: 15px;
    font-family: ${({theme})=>theme.fonts.medium};
`;

export const TextInput = styled.TextInput`
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    background-color: white;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding: 5px;
`;