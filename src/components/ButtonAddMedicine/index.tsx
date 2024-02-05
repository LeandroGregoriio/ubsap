import React from "react";
import {Container, Text} from './style'
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps{
    onPress:()=>void,
    name
}

export default function ButtonAddMedicine({onPress, name}:Props){
    return(
        <Container onPress={onPress} >
            <Text>{name}</Text>
        </Container>
    )
}