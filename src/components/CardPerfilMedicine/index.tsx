import React from "react";
import {Container, Text, Title} from './style';


interface Props {
    title:string,
    text:string
}


export default function CardPerfilMedicine({title, text}:Props){
    return(
        <Container >
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Container>
    )
}