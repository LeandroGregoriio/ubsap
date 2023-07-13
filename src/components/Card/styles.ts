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
    background-color: ${({type})=>type==='medicamentos' ? '#4E6BC7' : '#2DAD47' };
`;


export const Text = styled.Text`
    color: white;
    font-size: 16px;
`;

export const Icon = styled(Feather)<Props>`

`;

export const MaterialCommunityIcons = styled(Text)`
    font-size: 30px;
`