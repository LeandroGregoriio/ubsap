
import { Container, Info, Anotacao, Buttons, Text, Categoria, Photo } from "./style";
import Header from "../../components/Header";
import { Alert } from "react-native";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { Modal } from "react-native";
import CardPerfilMedicine from '../../components/CardPerfilMedicine';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 




export default function PerfilMedicine({route, navigation}: any) {

  const parametro = route?.params;

  console.log(parametro);

  return (
    <Container>
      
      <Header />

      <MaterialCommunityIcons name = 'pill' size={80} color='black' />
      

      <Info>
        <CardPerfilMedicine title="Invtervalo" text={parametro.interval} />
        <Categoria>{parametro.name}</Categoria>
        <CardPerfilMedicine title="Dias" text={parametro.time}/>
      </Info>

      <Anotacao>
        <Text>{"Alguma coisa"}</Text>
      </Anotacao>

    </Container>
  );
}
