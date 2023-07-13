import { FlatList } from "react-native";
import styled from "styled-components/native";

import { DadosAvisos } from ".";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#F8F8F8 ;
`;

export const Pagina = styled.View`
    margin: 0px 20px 0px 20px;
    flex: 1;
`;

export const Title = styled.Text`
    margin-top: 40px;
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
`;