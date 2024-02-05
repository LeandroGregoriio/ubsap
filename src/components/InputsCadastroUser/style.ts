import  styled  from 'styled-components/native';
import { MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import { TextInput } from 'react-native';

interface Props{
    type:string;
    placeholder:string;
}

export const Container = styled(TextInput)<Props>`
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
