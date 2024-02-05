import  styled  from 'styled-components/native';
import { MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import { TextInput } from 'react-native';

interface Props{
    type:string;
    placeholder:string;
}

export const Container = styled(TextInput)<Props>`
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 30%;
    flex: 1;
    background-color: white;
`;
