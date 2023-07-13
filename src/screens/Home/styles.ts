import styled from "styled-components/native";
import { FlatList, ScrollView } from "react-native";
import { getBottomSpace} from 'react-native-iphone-x-helper';

import {DataListProps} from '.';

interface Props{
    type : 'aberto' | 'fechado';
}
                     
export const  Container = styled.SafeAreaView`
    background-color:#F8F8F8 ;
    flex: 1;
`;

export const HomeC = styled.View`
    flex: 1;
    margin-top: 60px;
    margin: 0px 20px 0px 20px;
`;
export const HomeText=styled.Text`
    font-size: 22px;
    color: ${({theme})=>theme.colors.tittle};
    font-family: ${({theme})=>theme.fonts.bold};
`;

export const Destaques = styled.View`
    margin-top: 30px;
`;

export const DestaquesText = styled.Text`
    font-size: 16px;
    color: ${({theme})=>theme.colors.tittle};
    font-family: ${({theme})=>theme.fonts.bold};
`;

export const Cards = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const AcessarUBS = styled.View`
    margin-top: 52px;
    flex: 1;
`;

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.tittle};
    font-size: 16px;
`;

export const UBSList = styled(FlatList<DataListProps>).attrs({
    showsVerticalScrollIndicator:false,
})`
    margin-top: 15px;
`;