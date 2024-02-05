import React, { useId, useState } from "react";
import Header from "../../components/Header";
import { Container, MedicinesList, Text } from "./style";
import CadastroRefeicao from "../../components/CadastroRefeicao";
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
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import Confirm from "../../components/Confirm";
import { Modal } from "react-native";
import { Vibration } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CardDataMeal from "../../components/CardDataMeal";


export interface DataListProps extends CardDataMedicinesProps {
  id: string;
}

export default function DietScreen({ navigation }: any) {


  const [idDiet, setIdDiet] = useState();
  const [diet, setDiet] = useState();
  const [modalMedicine, setModalMedicine] = useState(false);
  const db = getFirestore(app);
  const [userId, setUserId] = useState('');
  const colRef = query(collection(db, "diet"), where ('user', '==', userId));

  if(!diet){
    onSnapshot(colRef, (QuerySnapshot) => {
      const diets: any = [];
      QuerySnapshot.forEach((doc) => {
        const { diet, title, time } = doc.data();
        diets.push({
          id: doc.id,
          diet,
          title,
          time,
        }); 
      }) 
      setDiet(diets);
      console.log(diets)
    });
  }


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
      const userId = user?.uid;
      setUserId(userId);
      console.log(userId,'teste');
    }) 
  
  }, []); 



  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header />
        <Text>Adicionar Refeição</Text>
        <CadastroRefeicao/>
        <Text>Minha dieta</Text>
        <MedicinesList
          data={diet}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <CardDataMeal
              data={item}
              onLongPress={() => {
                Vibration.vibrate(100)
                setIdDiet(item.id);
                setModalMedicine(true);
                console.log(idDiet);
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
          title="Deseja excluir essa refeição?"
            onPressCancelar={() => setModalMedicine(false)}
            onPressConfirmar={() => {
              deleteDoc(doc(db, "diet", idDiet));
              setModalMedicine(false);
            }}
          />
        </Modal>
      </Container>

    </TouchableWithoutFeedback>
  );
}
