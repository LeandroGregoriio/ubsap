import styled from "styled-components/native";
import { SelectList } from 'react-native-dropdown-select-list';

export const Container = styled(SelectList)`
    background-color: white;
    height: 50px;
    margin-top: 10px; 
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
`;