import { LinearGradient } from 'react-native-linear-gradient';
import styled from "styled-components/native";
import { Feather } from "react-native-feather";

interface Props{
    type: 'medicamentos' | 'dieta';
}

export const Container = styled.TouchableOpacity<Props>`
    color: white;
    border-radius: 5px;
    height: 102px;
    width: 161px;
    justify-content: center;
    align-items: center;
    margin-top: 21px;
    background-color: ${({type})=>type==='medicamentos' ? '#1a44c9' : '#10982c' };
`;


export const Text = styled.Text`
    color: white;
    font-size: 16px;
    font-family: ${({theme})=>theme.fonts.medium};
`;

export const Icon = styled(Feather)<Props>`

`;

export const MaterialCommunityIcons = styled(Text)`
    font-size: 30px;
    
`