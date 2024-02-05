import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";
import { startTransition } from "react";

export const Container = styled(LinearGradient).attrs({
    colors:["#147ebf","#04a0e3"],
    start: { x: 0.8, y: 0.6 },
    end: { x: 0.1, y: 0.2 }
})`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    color: white;
    font-size: 18px;
    font-family: ${({theme})=>theme.fonts.medium};
`;

