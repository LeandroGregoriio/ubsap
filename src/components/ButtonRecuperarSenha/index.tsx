import react from 'react'
import {Container, Text} from './style'
import {TouchableOpacityProps} from 'react-native'

interface Props extends TouchableOpacityProps {
    title:string;
}


export default function ButtonRecuperarSenha({title,...rest}:Props) {

    return(
        <Container {...rest} >
            <Text> {title} </Text>
        </Container>
    )

}