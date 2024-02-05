import React from "react";

import {Container,TitleColor,Msg, Icon, Dados, Cor} from './styles'

interface Props{
    titleColor:string;
    msg:string;
    type:'não está vazia' | 'quase cheia' | 'cheia' | 'vazia';
}


export default function LotacaoCard({titleColor, msg, type}:Props){
    return(
        <Container>
            <Cor type={type} />
            <Icon name="people" type={type} />
                <Dados>
                    <TitleColor type={type} >{titleColor}</TitleColor>
                    <Msg>{msg}</Msg>
                </Dados>
        </Container>
    );
}