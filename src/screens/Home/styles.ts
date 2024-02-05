import styled from "styled-components/native";
import { FlatList, ScrollView } from "react-native";
import { getBottomSpace} from 'react-native-iphone-x-helper';
import {LinearGradient} from "expo-linear-gradient";

import {DataListProps} from '.';

interface Props{
    type : 'aberto' | 'fechado';
}
                     
export const  Container = styled.View`
    background-color:#F8F8F8;
    width: 100%;
    padding: 20px;
    border-radius: 30px;
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

export const HomeText=styled.Text`
    font-size: 22px;
    color: ${({theme})=>theme.colors.tittle};
    font-family: ${({theme})=>theme.fonts.bold};
`;

export const DestaquesText = styled.Text`
    font-size: 16px;
    color: ${({theme})=>theme.colors.tittle};
    font-family: ${({theme})=>theme.fonts.medium};
    margin-left: 10px;
    margin-top: 10px;
`;

export const Cards = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.tittle};
    font-size: 16px;
    margin-top: 5%;
    margin-left: 10px;
    margin-bottom: 5%;
`;

export const UBSList = styled(FlatList<DataListProps>).attrs({
    showsVerticalScrollIndicator:false,
})``;

