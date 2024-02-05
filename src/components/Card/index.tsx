import React from "react";
import { Container, Text, Icon} from "./styles";
//import Icon from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableHighlightProps, TouchableOpacityProps } from "react-native";


interface Props extends TouchableOpacityProps{
    title: string;
    onPress: ()=>void;
    source:any
}


export default function Card({title, onPress, source}:Props){
    return(
    <Container onPress={onPress} >
        <Icon source={source} />
        <Text > {title} </Text>
    </Container>
    )
}