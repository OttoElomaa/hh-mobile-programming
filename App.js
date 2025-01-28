import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculator from "./components/Calculator"

import styles from './styles/Styles'
import CalcHistory from './components/CalcHistory';
import GuessNumber from './components/GuessNumber';
import MyIndex from './components/MyIndex';

import { _View, View } from 'react-native';
import FetchFoods from './components/FetchFoods';
import ExchangeRates from './components/ExchangeRates';


export default function App() {

	const Stack = createNativeStackNavigator();


	return (
		/* <View style={styles.flexItem1}>
			< GuessNumber />
			</View> */
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Index" component={MyIndex} />

				<Stack.Screen name="Calculator" component={Calculator} />
				<Stack.Screen name="History" component={CalcHistory} />

				<Stack.Screen name="Guess" component={GuessNumber} />
				<Stack.Screen name="Foods" component={FetchFoods} />
				<Stack.Screen name="MoneyRates" component={ExchangeRates} />
			</Stack.Navigator>

		</NavigationContainer>


	)
}
