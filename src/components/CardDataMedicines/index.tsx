import React, { useEffect } from "react";
import { Container, DataMedicine, Text, Data, Cor } from "./style";
import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import IconPill from "../IconPill";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Vibration } from 'react-native';
import * as Notifications from 'expo-notifications';

export interface CardDataMedicinesProps {
    name:string,
    time:number,
    interval:number,
}

export interface Props extends TouchableOpacityProps  {
    data: CardDataMedicinesProps,
    onLongPress:()=>void
}


export default function  CardDataMedicines({data, onLongPress, ...rest}:Props){



    return(

        <Container onLongPress={onLongPress} >
            <Cor>
            <IconPill/>
            </Cor>
            <Data>
            <DataMedicine> Nome: <Text>{data.name} </Text></DataMedicine>
            <DataMedicine> Tempo: <Text>{data.time} dias </Text> </DataMedicine>
            <DataMedicine> Intervalo: <Text>{data.interval} horas </Text> </DataMedicine>
            </Data>
        </Container>
       
    )
}