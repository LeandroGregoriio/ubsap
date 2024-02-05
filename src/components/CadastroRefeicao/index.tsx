import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Container, Form, InputsInfo, Text, Descricao } from "./style";
import InputCadastroMeal from "../InputCadastroMeal";
import ButtonAddMedicine from "../ButtonAddMedicine";
import { Alert } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  collection,
  addDoc,
  getFirestore,
} from "firebase/firestore";
import { app } from "../../config/firebase";

export default function CadastroRefeicao() {
  const db = getFirestore(app);
  const [title, setRefeicao] = useState("");
  const [diet, setDescricao] = useState("");
  const [userId, setUserId] = useState('');
  const [horario, setHorario] = useState('');
  const [time, setFormatado] = useState('')

  // Adicionando dois pontos entre os 4 dígitos
  useEffect(() => {
    if (horario.length === 4) {
      const horarioFormatado = `${horario.slice(0, 2)}:${horario.slice(2)}`;
      setFormatado(horarioFormatado);
      console.log(horarioFormatado);
    } else {
      // Lida com outros casos, se necessário
    }
  }, [horario]);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    setUserId(user.uid);
  });

  async function AddRefeicao() {
    try {
      const docRef = await addDoc(collection(db, "diet"), {
        time,
        title,
        diet,
        user: userId,
      });
      Alert.alert("Refeição cadastrada com sucesso!");

      setHorario('');
      setRefeicao('');
      setDescricao('');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <Container>
      <Form>
        <InputsInfo>
          <InputCadastroMeal
    
            onChangeText={(text) => setRefeicao(text)}
            placeholder="Refeição"
            inputName="Refeição"
            maxLength={20}
          />

<InputCadastroMeal
            onChangeText={(text) => {
              const numericText = text.replace(/\D/g, '');
              const formattedText = numericText.slice(0, 4);
              const formattedHorario = formattedText.length === 4
                ? `${formattedText.slice(0, 2)}:${formattedText.slice(2)}`
                : formattedText;

              setHorario(formattedText);
              setFormatado(formattedHorario);
            }}
            placeholder="Horário"
            inputName="Horário"
            keyboardType="number-pad"
            value={time}
            maxLength={5} // Ajusta para 5 para incluir os dois pontos
          />
        </InputsInfo>
        <Text>Descrição</Text>
        <Descricao
          onChangeText={(text) => setDescricao(text)}
          placeholder="Descrição"
          multiline={true}
        />
      </Form>
      {horario !== "" && diet !== "" && title !== "" ? (
        <ButtonAddMedicine onPress={AddRefeicao} name='Adicionar Refeição' />
      ) : (
        <Text> Preencha todos os campos!</Text>
      )}
    </Container>
  );
}
