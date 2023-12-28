import React from "react";
import {Container, Text, Input} from './style'
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
    inputName:string
}


export default function InputCadastroMedicamento({inputName,...rest}:Props){
    return(
        <Container>
            <Text>{inputName}</Text>
            <Input {...rest}></Input>
        </Container>
    )
}