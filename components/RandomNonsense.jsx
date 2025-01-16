import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import MyButton from "./MyButton";
import { useState } from 'react';


export default function RandomNonsense() {



	const [text, setText] = useState("");
  
	const buttonPressed = () => {
	  setText("Button 2 has been pressed")
	};
  
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
  
  
	return (
	  <View>
		<Text style={styles.myHeader}>HELLO WORLD</Text>
		<MyButton></MyButton>
  
		<Button
		  title="Button 2"
		  onPress={buttonPressed}>
		</Button>
  
		<TextInput
		  placeholder="Text input"
		  value={text}
		  onChangeText={text => setText(text)}
		  keyboardType="text"
		/>
  
		<Text style={styles.myHeader}>{text}</Text>
		<StatusBar style="auto" />
  
	  </View>
	);
  }
  