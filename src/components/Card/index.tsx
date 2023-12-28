import React from "react";
import { Container, Text} from "./styles";
//import Icon from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableHighlightProps, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps{
    title: string;
    type:'medicamentos' | 'dieta';
    nome:'pill' | 'food-off';
    onPress: ()=>void;
}


export default function Card({nome, type, title, onPress}:Props){
    return(
    <Container type={type} onPress={onPress} >
        <MaterialCommunityIcons name = {nome} size={60} color='white' />
        <Text > {title} </Text>
    </Container>
    )
}