import React from "react";


import {Container,TitleColor,Msg, Icon, Dados, Cor} from './styles'

interface Props{
    titleColor:string;
    msg:string;
    type:'vazia' |  'cheia' | 'intermediario';
}

export default function LotacaoCard({titleColor, msg, type}:Props){
    return(
        <Container>
            <Cor type={type} />
            <Icon name="md-people-sharp" type={type} />
                <Dados>
                    <TitleColor type={type} >{titleColor}</TitleColor>
                    <Msg>{msg}</Msg>
                </Dados>
        </Container>
    );
}