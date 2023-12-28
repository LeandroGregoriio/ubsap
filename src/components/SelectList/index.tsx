import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { Container } from './style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CadastrarMedicamento from '../CadastrarMedicamento';



export default function Select(props){


    const data = [
        {key:'continuo', value:'Uso contínuo', },
        {key:'temporario', value:'Uso temporário',},
    ]

    const [selected, setSelected] = React.useState('');
    props.result(selected);


    return(
        <Container
        placeholder="Tipo"
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="key"
        search={false}
        boxStyles={{
            backgroundColor:'white',
            borderWidth:0,
            marginTop:10
        }}
        dropdownStyles={{
            backgroundColor:'white',
            borderWidth:0.5,
            borderStyle:'dashed',
        }}
    />

    )
}
