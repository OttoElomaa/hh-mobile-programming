import { FlatList, Text, View } from "react-native";
import styles from '../styles/Styles'
import { useEffect, useState } from "react";
import MyGenericButton from "./MyGenericButton";
import { Picker, Item } from '@react-native-picker/picker';

export default function ExchangeRates({ navigation }) {

	useEffect(() => getSymbols(), [])

	const [searchTerm, setSearchTerm] = useState("")

	const [symbols, setSymbols] = useState([])

	const [from, setFrom] = useState("EUR")
	const [to, setTo] = useState("")
	const [amount, setAmount] = useState(1)
	const [result, setResult] = useState(0)

	var myHeaders = new Headers();
	myHeaders.append("apikey", "WMqUXMNsvsxIrqfhT1LV1a2IVTWTYH8G");

	var requestOptions = {
		method: 'GET',
		redirect: 'follow',
		headers: myHeaders
	};

	const convert = () => {
		fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
			.then(response => response.text())
			.then(result => {
				console.log(result)
				console.log({from})
				setResult(result)
			}
				
			)
			.catch(error => console.log('error', error));
	}

	const getSymbols = () => {
		fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
			.then(response => response.json())
			.then(result =>
				setSymbols(result.symbols)
			)
			.catch(error => console.log('error', error));

	}

	const deez = () => {
		console.log(symbols)
	}


	return (
		<View style={styles.container}>



			<MyGenericButton
				function={deez}
				text="Print symbols"
			/>
			<Text>From: {from}</Text>
			<View style={styles.myPicker}>
				<Picker
					selectedValue={from}
					onValueChange={(itemValue, itemIndex) => 
						setFrom(itemValue)
					}>

					{/* This from ChatGPT */}
					{Object.entries(symbols).map(([key, value]) =>
						<Item label={value} value={key} />
					)}
				</Picker>
			</View>

			<Text>To: {to}</Text>
			<View style={styles.myPicker}>
				<Picker
					selectedValue={to}
					onValueChange={(itemValue, itemIndex) =>
						setTo(itemValue)
					}>

					{/* This from ChatGPT */}
					{Object.entries(symbols).map(([key, value]) =>
						<Item label={value} value={key} />
					)}
				</Picker>
			</View>

			<MyGenericButton
				function={convert}
				text="Show conversion rate"
			/>

			<Text>Result:</Text>
			<Text>{result.result}</Text>

			{/* marcodt89 on Aug 22, 2019, https://stackoverflow.com/questions/57604947/how-to-assign-items-to-picker-getting-a-list-of-data-as-a-response-in-the-form-o
			"How to assign Items to picker getting a list of data as a response in the form of an array?" */}
			{/* {symbols.map((item) => <Item label={item} value={item} />)} */}

			{/* <FlatList style={{ width: 200 }}
				data={Object.keys(symbols)}
				renderItem={({ item }) =>
					<View style={styles.margin1}>
						<Text style={[styles.listItem]}>
							{item}
						</Text>
					</View>
				}
			/> */}


		</View>
	)
}

