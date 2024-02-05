import React, { useId, useState } from "react";
import Header from "../../components/Header";
import { Container, MedicinesList, Text } from "./style";
import CardDataMedicines from "../../components/CardDataMedicines";
import {
  collection,
  onSnapshot,
  getFirestore,
  deleteDoc,
  doc,
  where,
  query
} from "firebase/firestore";
import { useEffect } from "react";
import { app } from "../../config/firebase";
import { CardDataMedicinesProps } from "../../components/CardDataMedicines";
import CadastrarMedicamento from "../../components/CadastrarMedicamento";
import { ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import Confirm from "../../components/Confirm";
import { Modal } from "react-native";
import { Vibration } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "../../components/Loading";

export interface DataListProps extends CardDataMedicinesProps {
  id: string;
}

export default function MedicineScreen({ navigation }: any) {


  const [idMedicine, setIdMedicine] = useState();
  const [medicines, setMedicines] = useState("");
  const [modalMedicine, setModalMedicine] = useState(false);
  const db = getFirestore(app);
  const [userId, setUserId] = useState('');
  const [modalLoading, setModalLoading] = useState(false);
  const colRef = query (collection(db, "medicines"), where('userId', '==', userId));



  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
      const userId = user.uid;
      setUserId(userId);
      console.log(userId,'teste 1');
    }) 
    

  }, []); 

  if(!medicines){
    onSnapshot(colRef,  (QuerySnapshot) => {
      const medicines: any = [];
      QuerySnapshot.forEach((doc) => {
        const { interval, name, time } = doc.data();
        medicines?.push({
          id: doc.id,
          interval,
          name,
          time,
        }); 
      }) 
      setMedicines(medicines);
      console.log(medicines)
    });
  }

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
                setIdMedicine(item?.id);
                Vibration.vibrate(100)
                setModalMedicine(true);
                console.log(idMedicine);
              }}
            />
          )}
        /> 
        <Modal
          visible={modalMedicine}
          transparent={true}
          focusable={true}
          animationType="fade"
        >
          <Confirm
          title="Deseja excluir esse medicamento?"
            onPressCancelar={() => setModalMedicine(false)}
            onPressConfirmar={async () => {
            await deleteDoc(doc(db, "medicines", idMedicine));
            setModalMedicine(false);
            }}
          />
        </Modal>
      </Container>

    </TouchableWithoutFeedback>
  );
}
