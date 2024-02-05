import React from "react";
import {Imagem, Container} from './styles'

export default function Logo(){
    return(
        <Container>
        <Imagem source={require('../../assets/eUbsBranco.png')} />
        </Container>
    )
}