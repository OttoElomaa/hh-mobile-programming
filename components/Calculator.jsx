import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import MyButton from "./MyButton";
import { useState } from 'react';
import MyGenericButton from './MyGenericButton';


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



	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'space-evenly',

			// Column is default
			flexDirection: "column"
		},
		row: { flexDirection: "row" },

		myHeader: {
			fontSize: 20,
			color: "blue",
		},

		myTextInput: {
		},

		block1: { flex: 1, justifyContent: 'space-evenly', alignItems: 'center' },
		block2: { flex: 2, justifyContent: 'space-evenly', alignItems: 'center' }
	});


	return (
		<View style={styles.container}>
			<View style={styles.block2}>

				<Text style={styles.myHeader}>OTTO'S CALCULATOR APP</Text>

				<TextInput
					placeholder="First number"
					value={firstNum}
					onChangeText={firstNum => setFirstNum(firstNum)}
					keyboardType="numeric"
				/>
				<TextInput
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

				<FlatList
					data={resultsList}
					renderItem={({ item }) => <Text>{item.firstNum} {item.operator} {item.secondNum} = {item.result}</Text>}
				/>

				<StatusBar style="auto" />

			</View>
			<View style={styles.block1}></View>
		</View>

	);
}
