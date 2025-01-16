import { useState } from "react"
import { TextInput, Text, View, Alert } from "react-native"

import styles from '../styles/Styles'
import { SafeAreaView } from "react-native-safe-area-context"
import MyGenericButton from "./MyGenericButton"



export default function GuessNumber({ navigation }) {

	const [input, setInput] = useState(0)
	const [solution, setSolution] = useState(0)
	const [text, setText] = useState(0)

	const getRandomNumber = () => {
		setSolution(Math.floor(Math.random() * 100) + 1)
	}

	const guessNumber = () => {
		if (solution < input) { setText("Too big") }
		else if (solution > input) { setText("Too small") }
		else { 
			Alert.alert("You guessed the number!")
			getRandomNumber() }
	}


	return (

		<SafeAreaView style={styles.container}>

			<TextInput style={[styles.myInputField, styles.margin1]}
				placeholder="Guess the number"
				value={input}
				onChangeText={num => setInput(num)}
				keyboardType="numeric"
			/>

			<MyGenericButton
				function={guessNumber}
				text="Guess"
			/>
			<MyGenericButton
				function={getRandomNumber}
				text="Get new number"
			/>

			{/* <Text>You guessed {input}</Text>
			<Text>The correct answer is {solution}</Text> */}
			<Text>{text}</Text>

		</SafeAreaView>
	)
}