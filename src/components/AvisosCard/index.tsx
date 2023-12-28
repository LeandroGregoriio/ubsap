import react from 'react';
import {Container,
     Dados,
      Title,
       Msg,
       Cor,
       Icon} from './styles';

export interface AvisosProps{
        title:string;
        description:string
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
                <Msg>{data.description}</Msg>
            </Dados>       
        </Container>
    )
}