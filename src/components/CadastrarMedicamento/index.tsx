import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Container, Form, InputsInfo, Text } from "./style";
import InputCadastroMedicamento from "../InputCadastroMedicamento";
import ButtonAddMedicine from "../ButtonAddMedicine";
import { Alert } from "react-native";
import SelectList from "../../components/SelectList";
import * as Notifications from 'expo-notifications';

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

  console.log('aqui'+time);

  useEffect(() => {
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
    console.log("Inicia a funçao")
    // Limpar todos os alarmes existentes (caso haja algum)
    await clearAllNotifications();

    // Obter a data e hora atual
    const currentDate = new Date();

    // Configurar alarmes para os próximos 'time' dias com intervalo de 'interval' horas
    for (let i = 0; i < parseInt(time); i++) {
      const alarmDate = new Date(currentDate.getTime() + i * parseInt(interval) * 60 * 60 * 1000);

      // Calcular o tempo restante para a próxima notificação
      const timeDiff = alarmDate.getTime() - currentDate.getTime();
      const timeDiffHours = Math.floor(timeDiff / (60 * 60 * 1000));
      const timeDiffMinutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));

      console.log(`Próxima notificação em ${timeDiffHours} horas e ${timeDiffMinutes} minutos`);

      // Configurar um alarme para cada dia no horário especificado
      await scheduleNotification(alarmDate, `Tomar medicamento - Dia ${i + 1}`);
    }
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
        body: 'É hora de tomar o medicamento.',
      },
      trigger: {
        date,
        repeats: 'daily', // Repetir diariamente
      },
    });
  };

  async function AddMedicamento() {
    setLoading(true);
    try {
      if (parseInt(interval) > 24) {
        Alert.alert("O intervalo não pode ser superior a 24h");
        console.log("O valor é maior que 24");
      } else {
        const docRef = await addDoc(collection(db, "medicines"), {
          interval,
          name,
          time,
          continuo
        });
        setLoading(false);
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
  setupMedicationAlarms();

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
        <ButtonAddMedicine onPress={AddMedicamento} />
      ) : (
        <Text> Preencha todos os campos!</Text>
      )}
    </Container>
  );
}
