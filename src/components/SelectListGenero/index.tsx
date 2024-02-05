import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { Container } from './style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CadastrarMedicamento from '../CadastrarMedicamento';



export default function SelectListGenero(props){

    const data = [
        {key:'Masculino', value:'Masculino', },
        {key:'Feminino', value:'Feminino',},
        {key:'Outro', value:'Outro',}
    ]

    const [selected, setSelected] = React.useState('');
    props.result(selected);


    return(
        <Container
        placeholder="Gênero"
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="key"
        search={false}
        boxStyles={{
            backgroundColor:'white',
            borderWidth:0,
            marginTop:10,
            shadowColor: '#e9e9e9',
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
        }}
        dropdownStyles={{
            backgroundColor:'white',
            borderWidth:0.5,
            borderStyle:'dashed',
        }}
    />

    )
}
