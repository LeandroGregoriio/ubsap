import React from "react";
import {Container, Text} from './style'
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps{
    text:string;
    type:'Confirmar' | 'Cancelar';
    onPress:()=>void;
}


export default function ButtonConfirm({text, type, onPress}:Props){
    return (
        <Container type={type} onPress={onPress}  >
            <Text>{text}</Text>
        </Container> 
    );  
}