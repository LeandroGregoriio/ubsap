import React from "react";
import {Container, Title} from './style';
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    type:string;
    onPress:()=>void
}

export default function ButtonsLogin({type, onPress}:Props){
    return(
        <Container type={type} onPress={onPress} >      
        <Title type={type} >{type}</Title>   
        </Container>
    )
}