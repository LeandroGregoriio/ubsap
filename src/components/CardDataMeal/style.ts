import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  width: 100%;
  background-color: white;
  margin-top: 10px;
  height: 90px;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  
`;

export const DataMedicine = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.tittle};
  margin-left: 20px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.tittle};
`;


export const Data = styled.View`
    width: 100%;
    justify-content: center;
    flex-direction: row;
    text-align: center;
`;

export const Cor = styled.View`
  background-color: ${({ theme }) => theme.colors.roxo};
  width: 20%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const Descricao = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.tittle};
  margin-top: 20px;
`;