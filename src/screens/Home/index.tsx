import react from "react";
import {Container, HomeText, Destaques, DestaquesText, Cards, HomeC} from './styles';
import Card from '../../components/Card';
import {UBSCardProps} from '../../components/UBSCard';
import UBSCard from "../../components/UBSCard";
import { ScrollView } from "react-native";

import {AcessarUBS, Title, UBSList} from './styles'

export interface DataListProps extends UBSCardProps{
    id: string;
  }

export default function Home(){


    const data: DataListProps[] = [
        {
        id: '1',
        title:'UBS Vila Serranópolis',
        estado:'Aberto',
        horario:'08:00-17:30'
        },
        {
            id: '2',
            title:'UBS Vila Kennedy',
            estado:'Aberto',
            horario:'08:00-17:30'
        },

        {
            id: '3',
            title:'UBS Vila São Sebastião',
            estado:'Fechado',
            horario:'08:00-17:30'
        },

        {
            id: '4',
            title:'UBS Vila União',
            estado:'Aberto',
            horario:'08:00-17:30'
        },
        {
            id: '5',
            title:'UBS Tanque',
            estado:'Aberto',
            horario:'08:00-17:30'
        },
        {
            id: '6',
            title:'UBS Mulungu',
            estado:'Aberto',
            horario:'08:00-17:30'
        },
    ]
    return(
        
        <Container>
            <HomeC>
            <HomeText>Home</HomeText>
            <Destaques>
                <DestaquesText>Destaques</DestaquesText>
                <Cards>
                    <Card title='Medicamentos' type='medicamentos' nome='pill' />
                    <Card title='Dieta' type='dieta' nome='food-off' />
                </Cards>
            </Destaques>
            <AcessarUBS>
                <Title>Acessar UBS</Title>
              
                <UBSList 
                    data={data}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><UBSCard data = {item} />}
                />
        
            </AcessarUBS>
            </HomeC>
        </Container>
    )
}