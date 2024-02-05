import React from "react";
import {Container, Title} from './style';
import { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";

interface Props extends TouchableOpacityProps {
    nome:String;
    onPress: ()=>void;
}

export default function ButtonsLoginCadastro({nome, onPress}:Props){
    return(
        <TouchableOpacity onPress={onPress} style={{
            width:'100%'
        }} >
        <Container >
            <Title>{nome}</Title>
        </Container>
        </TouchableOpacity>
    )
}