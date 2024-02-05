import React, { useEffect } from "react";
import { Container, DataMedicine, Text, Data, Descricao } from "./style";
import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import IconPill from "../IconPill";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Vibration } from 'react-native';
import * as Notifications from 'expo-notifications';

export interface CardDataMealProps {
    diet:string,
    time:string,
    title:string,
}

export interface Props extends TouchableOpacityProps  {
    data: CardDataMealProps,
    onLongPress:()=>void
}


export default function  CardDataMeal({data, onLongPress, ...rest}:Props){



    return(

        <Container onLongPress={onLongPress} >
            <Data>
            <DataMedicine><Text>{data.time}</Text></DataMedicine>
            <DataMedicine><Text>-</Text></DataMedicine>
            <DataMedicine><Text>{data.title}</Text></DataMedicine>
            </Data>
            <Descricao> {data.diet} </Descricao>
        </Container>
       
    )
}