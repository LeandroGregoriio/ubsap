import React from "react";
import {Container,
    Title,
    Estado, 
    Times,
    Header,
    Footer,
    Horarios,
    NameIcon
} from './styles';

import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from "react-native";

export interface UBSCardProps  {
    id:string,
    ubsName:string,
    status:'Aberta' | 'Fechada',
    time:string,
    timeNow:string
}

export interface Props extends TouchableOpacityProps{
    data: UBSCardProps
    onPress: ()=> void;
}


export default function UBSCard({data, onPress, ...rest}:Props){

    return(
        <Container  onPress={onPress}>
            <Header>
                <NameIcon>
                <EvilIcons name="location" size={35} color="#888888"/>
                <Title>{data.ubsName}</Title> 
                </NameIcon>
                <Estado type={data.status}> {data.status}</Estado>
            </Header>

            <Footer>
                <Horarios>
                <Times>{data.time}</Times>
                <Times>{data.timeNow}</Times>
                </Horarios>
                
            </Footer>
        </Container>
    );
}