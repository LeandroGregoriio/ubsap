import React from "react";
import {Container, Nome, Registro, Foto, Dados} from './styles'

interface DadosMedicos{
    nome:string,
    registro:string
}


export default function PerfilDr({nome,registro}:DadosMedicos){
    return(
        <Container>
            <Foto source={require('../../assets/medico.jpg')} />
            <Dados>
             <Nome>{nome}</Nome>
             <Registro>{registro}</Registro>
             </Dados>
        </Container>
    );
}