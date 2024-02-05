import { FlatList } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { DadosAvisos } from ".";

export const Container = styled.View`
    background-color:#F8F8F8;
    width: 100%;
    padding: 20px;
    flex: 1;
`;

export const Header = styled(LinearGradient).attrs({
    colors:["#147ebf","#04a0e3"],
    start: { x: 0.8, y: 0.6 },
    end: { x: 0.1, y: 0.2 }
})`
    background-color:blue ;
    flex: 1;
    padding-top: 10%;
    align-items: center;
`;


export const Fechada = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
`;

export const Title = styled.Text`
    font-size:22px;
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.tittle};
`;

export const Plantao = styled.View`
    margin-top: 30px;    
`;

export const Text = styled.Text`
    font-size: 16px;
    font-family: ${({theme})=>theme.fonts.semibold};
    color: ${({theme})=>theme.colors.tittle};

`;

export const Lotacao = styled.View`
    margin-top: 30px;
`;

export const Avisos = styled.View`
    margin-top: 30px;
    flex: 1;
`;

export const AvisosList = styled(FlatList<DadosAvisos>).attrs({})`
    margin-top: 10px;
`;