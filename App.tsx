
import React from 'react';
import Home from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import {useFonts, Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import theme from './src/global/styles/theme';

import PaginaUBS from './src/screens/PaginaUBS';

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_500Medium
  });

if (!fontsLoaded){
  return null
    } 
    
  return (
    <ThemeProvider theme={theme}>
     <PaginaUBS type='intermediario'/>
    </ThemeProvider>
  );
};
