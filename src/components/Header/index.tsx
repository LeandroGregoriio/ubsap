import React from "react";
import {Container, Logo} from './style';



export default function Header(){
    return(
        <Container>
            <Logo source={require('../../assets/eUbsColorido.png')} />
        </Container>
    )
}