import React from "react";
import { Container, Text, Buttons, Modal } from "./style";
import ButtonConfirm from "../ButtonConfirm";
import { ModalBaseProps } from "react-native";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps{
    onPressConfirmar:()=>void;
    onPressCancelar:()=>void;
    title:string;
}


export default function Confirm({onPressConfirmar, onPressCancelar, title}:Props) {
  return (
    <Modal>
    <Container>
        <Text>{title}</Text>
        <Buttons>
          <ButtonConfirm text="Confirmar" type='Confirmar' onPress={onPressConfirmar}/>
          <ButtonConfirm text="Cancelar" type="Cancelar" onPress={onPressCancelar} />
        </Buttons>
    </Container>
    </Modal>
  );
}
