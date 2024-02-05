import { LinearGradient } from 'react-native-linear-gradient';
import styled from "styled-components/native";
import { Feather } from "react-native-feather";


export const Container = styled.TouchableOpacity`
    color: white;
    border-radius: 5px;
    height: 130px;
    width: 161px;
    justify-content: center;
    align-items: center;
    margin-top: 21px;
    background-color: white;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
`;


export const Text = styled.Text`
    color: ${({theme})=>theme.colors.text} ;
    font-size: 16px;
    font-family: ${({theme})=>theme.fonts.medium};
`;

export const Icon = styled.Image`
    width: 80px;
    height: 80px;
`;
