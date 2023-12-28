import React from "react";
import {Container, Text} from './style'
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps{
    onPress:()=>void
}

export default function ButtonAddMedicine({onPress}:Props){
    return(
        <Container onPress={onPress} >
            <Text>Adicionar Mecicamento</Text>
        </Container>
    )
}