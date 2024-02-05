import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import ButtonsLoginCadastro from '../../components/ButtonsLoginCadastro';
import CadastroUser from '../CadastroUser';
import { Container, Text } from './style';
import { Modal } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ActivityIndicator } from 'react-native';
import Login from '../Login';
import Logo from '../../components/Logo';



export default function TelaInicial({ navigation }: any) {
  const [modal, setModal] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
      setTimeout(()=>{
          setLoading(false)
      },2000)
     ;
  },[])

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      navigation.navigate("Home", { idUser:user.uid } );
    }
  })
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{ flex: 1 }}
  >
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss
        setModal(false);
      } } >
        <Container>
        <Logo/>
          <Text>Seja Bem Vindo!</Text>
          <ButtonsLoginCadastro
            nome="Cadastrar"
            onPress={() => {
              navigation.navigate('CadastroUser')
            }}
          />
          <ButtonsLoginCadastro
            nome="Entrar"
            onPress={() => {
              navigation.navigate("Login")
            }}
          />
        </Container>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}
