import styled  from 'styled-components/native';

interface Props{
    type:string;
}

export const Container = styled.TouchableOpacity<Props>`
    background-color: ${({theme})=>theme.colors.roxo};
    height: 60px;
    margin-top: 15px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
`;

export const Title = styled.Text<Props>`
    color: white;
    font-size: 18px;
    font-family: ${({theme})=>theme.fonts.bold};
`;
