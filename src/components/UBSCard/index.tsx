import React from "react";
import {Container,
    Title,
    Estado, 
    Horario,
    Header,
    Footer
} from './styles';

import { EvilIcons } from '@expo/vector-icons';

export interface UBSCardProps{
    id:string,
    title:string,
    estado:'Aberto' | 'Fechado',
    horario:string,
}

export interface Props{
    data: UBSCardProps;
}

export default function UBSCard({data}:Props){

    return(
        <Container >
            <Header>
                <EvilIcons name="location" size={35} color="#888888"/>
                <Title>{data.title}</Title>
            </Header>

            <Footer>
                <Estado type={data.estado}> {data.estado}</Estado>
                <Horario>{data.horario}</Horario>
            </Footer>
        </Container>
    );
}