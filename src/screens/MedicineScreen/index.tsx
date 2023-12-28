import React, { useState } from "react";
import Header from "../../components/Header";
import { Container, MedicinesList, Text } from "./style";
import CardDataMedicines from "../../components/CardDataMedicines";
import {
  collection,
  onSnapshot,
  getFirestore,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect } from "react";
import { app } from "../../config/firebase";
import { CardDataMedicinesProps } from "../../components/CardDataMedicines";
import CadastrarMedicamento from "../../components/CadastrarMedicamento";
import ButtonAddMedicine from "../../components/ButtonAddMedicine";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import Confirm from "../../components/Confirm";
import { Modal } from "react-native";
import { Vibration } from "react-native";

export interface DataListProps extends CardDataMedicinesProps {
  id: string;
}

export default function MedicineScreen({ navigation }: any) {
  const [idMedicine, setIdMedicine] = useState();
  const [medicines, setMedicines] = useState("");
  const [modal, setModal] = useState(false);
  const db = getFirestore(app);

  useEffect(() => {
    const db = getFirestore(app);
    const colRef = collection(db, "medicines");
    onSnapshot(colRef, (QuerySnapshot) => {
      const medicines: any = [];
      QuerySnapshot.forEach((doc) => {
        const { interval, name, time } = doc.data();
        medicines.push({
          id: doc.id,
          interval,
          name,
          time,
        });
      });
      setMedicines(medicines);
      navigation.navigate("MedicineScreen");
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header />
        <Text>Adicionar Medicamento</Text>
        <CadastrarMedicamento />
        <Text>Meus Medicamentos</Text>
        <MedicinesList
          data={medicines}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <CardDataMedicines
              data={item}
              onLongPress={() => {
                Vibration.vibrate(100)
                setIdMedicine(item.id);
                setModal(true);
                console.log(idMedicine);
              }}
            />
          )}
        />
        <Modal
          visible={modal}
          transparent={true}
          focusable={true}
          animationType="fade"
        >
          <Confirm
          title="Deseja excluir esse medicamento?"
            onPressCancelar={() => setModal(false)}
            onPressConfirmar={() => {
              deleteDoc(doc(db, "medicines", idMedicine));
              setModal(false);
            }}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
