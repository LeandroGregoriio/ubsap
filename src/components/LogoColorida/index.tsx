import React from "react";
import {Imagem, Container} from './styles'

export default function LogoColorida(){
    return(
        <Container>
        <Imagem source={require('../../assets/eUbsColorido.png')} />
        </Container>
    )
}