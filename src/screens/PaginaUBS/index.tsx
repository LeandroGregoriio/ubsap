import React from "react";
import { useState, useEffect } from "react";
import AvisosCard, {AvisosProps} from "../../components/AvisosCard";

import {
    Container,
    Pagina,
    Title,
    Plantao,
    Text,
    Lotacao,
    Avisos,
    AvisosList
} from './styles'

import PerfilDr from '../../components/PerfilDr';
import LotacaoCard from "../../components/LotacaoCard";

    

export interface DadosAvisos extends AvisosProps{
    id:string;
}

interface Props{
    type: 'cheia' | 'vazia' | 'intermediario';
}


export default function PaginaUBS({type}:Props){

    const data: DadosAvisos[] = [
        {
            id:'1',
            title:'Vacinação',
            msg:'Vacinação contra H1N1 até dia 04/05'
        },
        {
            id:'2',
            title:'Nutricionista',
            msg:'Disponível no dia 23/05'
        },
        {
            id:'3',
            title:'Gestantes',
            msg:'Atendimento à gestantes no dia 12/05'
        },
        {
            id:'4',
            title:'Gestantes',
            msg:'Atendimento à gestantes no dia 12/05'
        }
    ]
    

    const [titleColor, setTitleColor] = useState('');
    const [msg, setMsg] = useState('');

    const changeTitleColor = ({type}) =>{
        return (
        type ==='cheia' ? setTitleColor('Vermelho') : type ==='vazia' ? setTitleColor('Verde') : setTitleColor('Amarelo')
        );    
    }

    const changeMsg = ({type}) =>{
        return (
        type ==='cheia' ? setMsg('A UBS encontra-se muita cheia') : type ==='vazia' ? setMsg('A UBS encontra-se relativamente vazia') : setMsg('A UBS encontra-se relativamente cheia')
        );    
    }

    useEffect(()=>{
        changeTitleColor({type})
        changeMsg({type})
    })
    
    
    return(
        
        <Container>
            <Pagina>
                <Title>UBS Vila Serranópolis</Title>
                <Plantao>
                    <Text>Plantão</Text>
                    <PerfilDr nome="Roberta Nunes" registro="CRM / UF: 000000-0 / MG" />
                </Plantao>
                <Lotacao>
                    <Text>Lotação</Text>
                    <LotacaoCard type = {type} titleColor={titleColor}  msg={msg}
                    />
                    
                </Lotacao>
                <Avisos>
                    <Text>Avisos</Text>
                    <AvisosList
                        data={data}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=><AvisosCard data = {item} />}
                    />
                </Avisos>
            </Pagina>
        </Container>
    )

    
}