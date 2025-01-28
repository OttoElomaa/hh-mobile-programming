import { FlatList, Text, View } from "react-native";
import styles from '../styles/Styles'
import { useEffect, useState } from "react";
import MyGenericButton from "./MyGenericButton";

export default function ExchangeRates({ navigation }) {

	useEffect(() => getSymbols(), [])

	const [searchTerm, setSearchTerm] = useState("")

	const [symbols, setSymbols] = useState([])

	const [from, setFrom] = useState("")
	const [to, setTo] = useState("")

	var myHeaders = new Headers();
	myHeaders.append("apikey", "WMqUXMNsvsxIrqfhT1LV1a2IVTWTYH8G");

	var requestOptions = {
		method: 'GET',
		redirect: 'follow',
		headers: myHeaders
	};

	const convert = () => {
		fetch("https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
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
			<Text>Hiiee!</Text>

			<MyGenericButton
				function={deez}
				text="Print symbols"
			/>

			<FlatList style={{ width: 200 }}
				data={Object.keys(symbols)}
				renderItem={({ item }) =>
					<View style={styles.margin1}>
						<Text style={[styles.listItem]}>
							{item}
						</Text>
					</View>
				}
			/>


		</View>
	)
}

