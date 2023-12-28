import React from "react";
import {Container, Nome, Registro, Foto, Dados, Especialidade} from './styles'
import { ImageProps } from "react-native";

interface DadosMedicos extends ImageProps {
    nome:string,
    registro:string,
    specialty:string
} 

export default function PerfilDr({nome,registro, specialty, source}:DadosMedicos){


    return(
        <Container>
            <Foto source={source} />
            <Dados>
             <Nome>{nome}</Nome> 
             <Especialidade>{specialty}</Especialidade>
             <Registro>CRM: {registro}</Registro> 
             </Dados>
        </Container>
    );
}