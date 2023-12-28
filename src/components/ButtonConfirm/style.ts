import styled from "styled-components/native";

interface Props{
    type:'Confirmar' | 'Cancelar';
}

export const Container = styled.TouchableOpacity<Props>`
    background-color: ${({theme, type})=> type==='Confirmar' ? theme.colors.azul: theme.colors.vermelho };
    height: 50px;
    margin-top: 15px;
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
    width: 40%;
`;

export const Text = styled.Text`

    font-size: 18px;
    color: white;
    font-family: ${({theme})=>theme.fonts.semibold};

`