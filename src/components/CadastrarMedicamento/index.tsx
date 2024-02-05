import React, { useEffect, useState } from "react";
import { Container, Form, InputsInfo, Text } from "./style";
import InputCadastroMedicamento from "../InputCadastroMedicamento";
import ButtonAddMedicine from "../ButtonAddMedicine";
import { Alert } from "react-native";
import SelectList from "../../components/SelectList";
import * as Notifications from 'expo-notifications';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  collection,
  addDoc,
  getFirestore,
} from "firebase/firestore";
import { app } from "../../config/firebase";

export default function CadastrarMedicamento() {
  const db = getFirestore(app);
  const [name, setNome] = useState("");
  const [time, setTempo] = useState('');
  const [interval, setIntervalo] = useState('');
  const [loading, setLoading] = useState(false);
  const [tipo, setTipo] = useState("");
  const [continuo, setContinuo] = useState(false);

  const [userId, setUserId] = useState('')


  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
      const userId = user?.uid;
      setUserId(userId);
    }) 
    
    if (tipo === 'continuo') {
      setContinuo(true);
      setTempo('∞');
    } else {
      setContinuo(false);
    }
  }, [tipo]);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  const setupMedicationAlarms = async () => {
    // Limpar todos os alarmes existentes (caso haja algum)
    await clearAllNotifications();

    // Obter a data e hora atual
    const currentDate = new Date();
    const now = new Date();

    // Configurar alarmes para os próximos 'time' dias com intervalo de 'interval' horas
    const alarmDate = new Date(currentDate.getTime() + parseInt(interval) * 60 * 60 * 1000);

    // Calcular o tempo restante para a próxima notificação
    const timeDiff = alarmDate.getTime() - currentDate.getTime();
    const timeDiffHours = Math.floor(timeDiff / (60 * 60 * 1000));
    const timeDiffMinutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));

    const intervalDiff = Math.trunc((parseInt(time) * 24) / parseInt(interval));
    currentDate.setDate(now.getDate() + intervalDiff);

    const seconds = Math.abs(Math.ceil(now.getTime() - currentDate.getTime()) / 1000);
    const second = Math.abs(parseInt(interval) * 3600);

    console.log(`${now.getDate()}, ${intervalDiff}, ${currentDate.getTime()} \n${second} e ${seconds}`);

    // Configurar um alarme para cada dia no horário especificado
    const notidication_id = await scheduleNotification(second, 'Tomar medicamento');
  };

  const clearAllNotifications = async () => {
    // Limpar todas as notificações agendadas
    await Notifications.cancelAllScheduledNotificationsAsync();
  };

  const scheduleNotification = async (date, title) => {
    // Agendar a notificação
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: `É hora de tomar o medicamento ${name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          meddicice: {
            interval,
            name,
            time,
            continuo
          },
        },
      },
      trigger: {
        seconds: date,
        repeats: true, // Repetir diariamente
      },
    });
  };

  async function AddMedicamento() {
    try {
      
      if (parseInt(interval) > 24) {
        Alert.alert("O intervalo não pode ser superior a 24h");
        console.log("O valor é maior que 24");
      } else {

        const docRef = addDoc(collection(db, "medicines"), {
          interval,
          name,
          time,
          continuo,
          userId:userId
        });

        Alert.alert("Medicamento cadastrado com sucesso!");
        setupMedicationAlarms(); // Configurar notificações após o cadastro
      }
      setIntervalo('');
      setNome('');
      setTempo('');
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (

 <Container>
      <Form>
        <InputCadastroMedicamento
          value={name}
          onChangeText={(text) => setNome(text)}
          placeholder="Nome"
          inputName="Nome"
        />
        <SelectList
          result={(r) => {
            setTipo(r);
          }}
        />
        <InputsInfo>
          <InputCadastroMedicamento
            value={interval}
            onChangeText={(text) => setIntervalo(text)}
            placeholder="Intervalo"
            inputName="Intervalo (horas) "
            keyboardType="number-pad"
            maxLength={2}
          />

          {!continuo ? (
            <InputCadastroMedicamento
              onChangeText={(text) => setTempo(text)}
              placeholder="Tempo"
              inputName="Tempo (dias) "
              keyboardType="number-pad"
              maxLength={3}
            />
          ) : (
            <InputCadastroMedicamento
              value={'∞'}
              placeholder="Tempo"
              inputName="Tempo (dias) "
              keyboardType="number-pad"
              maxLength={3}
            />
          )}
        </InputsInfo>
      </Form>
      {tipo !== "" && name !== "" && time !== "" && interval !== "" ? (
        <ButtonAddMedicine onPress={AddMedicamento} name='Adicionar Medicamento'/>
      ) : (
        <Text> Preencha todos os campos!</Text>
      )}
    </Container>
  );
}
