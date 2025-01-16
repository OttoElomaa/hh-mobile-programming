import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RandomNonsense from './components/RandomNonsense';
import Calculator from "./components/Calculator"

import styles from './styles/Styles'


export default function App() {



  return(
    <SafeAreaView style={styles.container}>
      
      <Calculator/>
      
    </SafeAreaView>
    )
}
