import React from "react";
import {Container, Inputs, Email, Senha, Text, TextInput} from './style'
import Header from "../../components/Header";
import { useState } from "react";
import ButtonsLoginCadastro from "../../components/ButtonsLoginCadastro";
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from "firebase/auth";
import { Keyboard } from "react-native";
import { auth } from "../../config/firebase";
import { Alert } from "react-native";
import { useEffect } from "react";
import { KeyboardAvoidingView,
  Platform, } from "react-native";
import * as Notifications from 'expo-notifications';

export default function Login({navigation}:any){

  Notifications.requestPermissionsAsync()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);

    const handleLogin = ()=> {
        Keyboard.dismiss();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home",{ idUser: user.uid })
      })
    
      .catch((error) => {
        setErrorLogin(true);
        const errorMessage = error.message;
        console.log(errorMessage);
        Alert.alert('Usuario ou senha incorretos!')
      });
        }

        useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            navigation.navigate("Home", { idUser:user.uid } );
          }
        });
        },[])

    return(
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
        <Container>
            <Inputs>
            <Header/>
            <Email>
              <Text>Email:</Text>
                <TextInput 
                placeholder="Email" 
                placeholderTextColor={"#808080"} 
                onChangeText={(text)=>setEmail(text)}
                value={email}
                />
                </Email>
                <Senha>
                <Text>Senha:</Text>
                <TextInput 
                placeholder="Senha" 
                placeholderTextColor={"#808080"} 
                secureTextEntry={true} 
                onChangeText={(text)=>setPassword(text)}
                value={password}
                />
                </Senha>
                <ButtonsLoginCadastro nome='Entrar' onPress={handleLogin} />
                </Inputs>
            
        </Container>
        </KeyboardAvoidingView>
    )
}