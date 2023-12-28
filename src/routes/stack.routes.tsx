import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PaginaUBS from "../screens/PaginaUBS";
import MedicineScreen from "../screens/MedicineScreen";
import PerfilMedicine from "../screens/PerfilMedicine";
import CadastrarMedicamento from "../components/CadastrarMedicamento";
import Login from "../screens/Login";

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator screenOptions={{headerShadowVisible:false, headerTintColor:'#863AFF', headerTransparent:true, headerTitle:('')}}>

            <Screen name='Login' component={Login}/>
            <Screen name='Home' component={Home} options={{headerBackTitleVisible:false, headerBackVisible:false}} />
            <Screen name = 'PaginaUBS' component={PaginaUBS}/>
            <Screen name = 'MedicineScreen' component={MedicineScreen}/>
            <Screen name = 'PerfilMedicine' component={PerfilMedicine}/>
            <Screen name = 'CadastrarMedicamento' component={CadastrarMedicamento}/>

        </Navigator>
    )
}