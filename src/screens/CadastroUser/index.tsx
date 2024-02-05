import React, { useRef, useState } from "react";
import ButtonsLoginCadastro from "../../components/ButtonsLoginCadastro";
import {
  Container,
  Text,
  Nome,
  CPF,
  DataNascimento,
  Senha,
  Email,
  TextInput,
  Inputs,
  UBS,
  InputsForms,
  Endereco
} from "./style";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import SelectListGenero from "../../components/SelectListGenero";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Modal } from "react-native";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Header from "../../components/Header";

import { app } from "../../config/firebase";
const db = getFirestore(app);

const CadastroUser = ({ navigation }: any) => {
  
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [genero, setGenero] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [area, setAres] = useState("");
  const [modal, setModal] = useState(false);
  const [endereco, setEndereco] = useState('');

  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailV = regex.test(email);

  const CriarUsuario = async () => {
    try {
      if (!!emailV) {
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("Teste de id", user.uid);
            const uid = user.uid;

            addDoc(collection(db, "patients"), {
              name,
              area,
              date,
              email,
              cpf,
              genero,
              endereco,
              key:user.uid,
            });
            Alert.alert("Cadastro realizado com sucesso!");
            navigation.navigate("Home", {idUser:user.uid});
          }
          )
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      } else {
        Alert.alert("Insira um email válido!");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  const formatarCPF = (input) => {
    const onlyNumbers = input.replace(/[^\d]/g, "");
    const formattedCPF = onlyNumbers.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    );
    setCpf(formattedCPF);
  };


  const formatarData = (input) => {
    if (input.length === 8) {
      const formattedDate = `${input.substring(0, 2)}/${input.substring(
        2,
        4
      )}/${input.substring(4, 8)}`;
      setDate(formattedDate);
    } else {
      setDate(input);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Inputs>
          <Header/>
            <Nome>
              <Text>Nome completo:</Text>
              <TextInput onChangeText={setName} />
            </Nome>
            <CPF>
              <Text>CPF:</Text>
              <TextInput
                value={cpf}
                onChangeText={formatarCPF}
                keyboardType="number-pad"
                maxLength={14} // Tamanho máximo do CPF formatado (###.###.###-##)
              />
            </CPF>
            <DataNascimento>
              <Text>Data de Nasc.:</Text>
              <TextInput
                value={date}
                onChangeText={formatarData}
                placeholder="DDMMAAAA"
                maxLength={8}
                keyboardType="numeric"
              />
            </DataNascimento>
            <SelectListGenero
              result={(r) => {
                setGenero(r);
              }}
            />

            <UBS>
              <Text>Seu Bairro/Vila:</Text>
              <TextInput onChangeText={setAres} />
            </UBS>
            <Endereco>
              <Text>Rua e número:</Text>
              <TextInput onChangeText={setEndereco} />
            </Endereco>
            <ButtonsLoginCadastro nome="Avançar" onPress={()=>{
              setModal(true)
            }} />
<Modal visible={modal} animationType="fade" >
            <InputsForms>
            <Inputs>
            <Email>
              <Text>Email:</Text>
              <TextInput keyboardType="email-address" onChangeText={setEmail} />
            </Email>
            <Senha>
              <Text>Senha:</Text>
              <TextInput secureTextEntry={true} onChangeText={setPassword} />
            </Senha>
            <Senha>
              <Text>Confirme a senha:</Text>
              <TextInput secureTextEntry={true} onChangeText={setPassword} />
            </Senha>
            <ButtonsLoginCadastro nome="Cadastrar" onPress={CriarUsuario} />
            <ButtonsLoginCadastro nome="Voltar" onPress={()=>{
              setModal(false);
            }} />
            </Inputs>
            </InputsForms>
</Modal>
          </Inputs>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CadastroUser;
