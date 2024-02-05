import styled from "styled-components/native";
import { FlatList } from "react-native";

export const  Container = styled.View`
    flex: 1;
    background-color:F8F8F8 ;
    padding: 20px;
    align-items: center;
`;

export const MedicinesList = styled(FlatList)`
    width:100%;
`;

export const Text = styled.Text`

    font-size: 18px;
    color: ${({theme})=>theme.colors.tittle};
    font-family: ${({theme})=>theme.fonts.semibold};
    margin-top: 20px;
    margin-bottom: 10px;

`;