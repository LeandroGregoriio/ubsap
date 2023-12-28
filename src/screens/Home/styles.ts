import styled from "styled-components/native";
import { FlatList, ScrollView } from "react-native";
import { getBottomSpace} from 'react-native-iphone-x-helper';

import {DataListProps} from '.';

interface Props{
    type : 'aberto' | 'fechado';
}
                     
export const  Container = styled.View`
    background-color:#F8F8F8 ;
    flex: 1;
    padding: 20px;
`;

export const HomeText=styled.Text`
    font-size: 22px;
    color: ${({theme})=>theme.colors.tittle};
    font-family: ${({theme})=>theme.fonts.bold};
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

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.tittle};
    font-size: 16px;
    margin-top: 5%;
`;

export const UBSList = styled(FlatList<DataListProps>).attrs({
    showsVerticalScrollIndicator:false,
})``;