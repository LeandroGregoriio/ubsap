import react from 'react';
import {Container,
     Dados,
      Title,
       Msg,
       Cor,
       Icon} from './styles';

export interface AvisosProps{
        title:string;
        msg:string
       }

export interface Props{
    data:AvisosProps;
}

export default function AvisosCard({data}:Props){
    return(
        <Container>
            <Cor/>
            <Icon name='bell' />
            <Dados> 
                <Title>{data.title}</Title>
                <Msg>{data.msg}</Msg>
            </Dados>       
        </Container>
    )
}