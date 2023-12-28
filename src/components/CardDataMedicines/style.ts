import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  background-color: white;
  margin-top: 10px;
  height: 77px;
`;

export const DataMedicine = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.tittle};
  margin-left: 20px;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.tittle};
`;


export const Data = styled.View`
    justify-content: space-around;
    margin-left: 5px;
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