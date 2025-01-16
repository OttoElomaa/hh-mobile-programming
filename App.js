import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import MyButton from "./components/MyButton";
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import RandomNonsense from './components/RandomNonsense';
import Calculator from "./components/Calculator"


export default function App() {


  const styles = StyleSheet.create({
	  container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-evenly',
  
		// Column is default
		flexDirection: "column"
	  },
  
	  myHeader: {
		fontSize: 30,
		color: "orange",
	  },
  
	  myTextInput: {
  
	  }
	});


  return(
    <SafeAreaView style={styles.container}>
      
      <Calculator/>
      
    </SafeAreaView>
    )
}
