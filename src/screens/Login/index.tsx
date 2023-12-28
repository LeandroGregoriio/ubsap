import React from "react";
import {Container, Inputs} from './style'
import Header from "../../components/Header";
import InputsLogin from "../../components/InputsLogin";
import { useState } from "react";
import ButtonsLogin from "../../components/ButtonsLogin";
import ButtonRecuperarSenha from "../../components/ButtonRecuperarSenha";
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from "firebase/auth";
import { Keyboard } from "react-native";
import { auth } from "../../config/firebase";
import { Alert } from "react-native";
import { useEffect } from "react";
import * as Notifications from 'expo-notifications';


export default function Login({navigation}:any){

  Notifications.requestPermissionsAsync()

    const [email, setEmail] = useState("leandrogregoriio@gmail.com");
    const [password, setPassword] = useState("123456");
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
        <Container>
            <Header/>
            <Inputs>
                <InputsLogin type="email" 
                placeholder="Email" 
                placeholderTextColor={"#808080"} 
                onChangeText={(text)=>setEmail(text)}
                value={email}
                />
                <InputsLogin type="senha" 
                placeholder="Senha" 
                placeholderTextColor={"#808080"} 
                secureTextEntry={true} 
                onChangeText={(text)=>setPassword(text)}
                value={password}
                />

                <ButtonsLogin type="Entrar" onPress={handleLogin} />
            </Inputs>
        </Container>
    )
}