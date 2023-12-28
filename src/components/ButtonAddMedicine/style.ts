import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`

background-color: white;
height: 60px;
margin-top: 15px;
border-radius: 10px;
box-shadow: 0px 5px 10px rgba(0,0,0,0.05);
align-items: center;
justify-content: space-around;
width: 100%;
padding: 10px;
`;


export const Text = styled.Text`
    font-size: 18px;
    font-family: ${({theme})=>theme.fonts.semibold};
`;