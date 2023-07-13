import React from "react";
import { Container, Text} from "./styles";
//import Icon from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

interface Props{
    title: string;
    type:'medicamentos' | 'dieta';
    nome:'pill' | 'food-off';
}

export default function Cards({title, type, nome}:Props){
    return(
    <Container type = {type}>
        <MaterialCommunityIcons name = {nome} size={60} color='white' />
        <Text > {title} </Text>
    </Container>
    )
}