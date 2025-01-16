import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import MyButton from "./MyButton";
import { useState } from 'react';
import MyGenericButton from './MyGenericButton';
import styles from '../styles/Styles'


export default function Calculator() {


	// STATES, SETTERS
	const [firstNum, setFirstNum] = useState(0);
	const [secondNum, setSecondNum] = useState(0);

	const [result, setResult] = useState(0);
	//const [resultsList, setResultsList] = useState( [] )

	const [resultObject, setResultObject] = useState(0);
	const [resultsList, setResultsList] = useState([{
		firstNum: '',
		secondNum: '',
		result: '',
		operand: '',
		function: ''
	}])



	const calcAdd = () => {
		setResult(Number(firstNum) + Number(secondNum))
		setResultsList(list => [...list, {
			firstNum: firstNum,
			secondNum: secondNum,
			result: Number(firstNum) + Number(secondNum),
			operator: "+",
			function: { calcAdd }
		}]);
	};
	const calcSubstract = () => {
		setResult(firstNum - secondNum)
		setResultsList(list => [...list, {
			firstNum: firstNum,
			secondNum: secondNum,
			result: Number(firstNum) - Number(secondNum),
			operator: "-",
			function: { calcSubstract }
		}]);
	};
	const calcMultiply = () => {
		setResult(firstNum * secondNum)
		setResultsList(list => [...list, {
			firstNum: firstNum,
			secondNum: secondNum,
			result: Number(firstNum) * Number(secondNum),
			operator: "*",
			function: { calcMultiply }
		}]);
	};
	const calcDivide = () => {
		setResult(firstNum / secondNum)
		setResultsList(list => [...list, {
			firstNum: firstNum,
			secondNum: secondNum,
			result: Number(firstNum) / Number(secondNum),
			operator: "/",
			function: { calcDivide }
		}]);
	};




	const buttonPressed = () => {
		Alert.alert("Button was pressed!")
	};



	


	return (
		<View style={styles.container}>


			<Text style={styles.myHeader}>OTTO'S CALCULATOR APP</Text>

			<TextInput style={styles.myInputField}
				placeholder="First number"
				value={firstNum}
				onChangeText={firstNum => setFirstNum(firstNum)}
				keyboardType="numeric"
			/>
			<TextInput style={styles.myInputField}
				placeholder="Second number"
				value={secondNum}
				onChangeText={secondNum => setSecondNum(secondNum)}
				keyboardType="numeric"
			/>

			<View style={styles.row}>
				<MyGenericButton
					function={calcAdd}
					text="  +  "
				/>
				<MyGenericButton
					function={calcSubstract}
					text="  -  "
				/>
			</View>

			<View style={styles.row}>
				<MyGenericButton
					function={calcMultiply}
					text="  *  "
				/>
				<MyGenericButton
					function={calcDivide}
					text="  /  "
				/>
			</View>


			<Text style={styles.myHeader}>Result:</Text>
			<Text style={styles.myHeader}>{result}</Text>

			<FlatList style={{maxHeight:200}}
				data={resultsList}
				renderItem={({ item }) =>
					<Text>
						{item.firstNum} {item.operator} {item.secondNum} = {item.result}
					</Text>}
			/>

			<StatusBar style="auto" />


		</View>

	);
}
