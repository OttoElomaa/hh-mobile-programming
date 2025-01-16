import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RandomNonsense from './components/RandomNonsense';
import Calculator from "./components/Calculator"

import styles from './styles/Styles'
import CalcHistory from './components/CalcHistory';
import GuessNumber from './components/GuessNumber';
import { _View, View } from 'react-native';


export default function App() {

	const Stack = createNativeStackNavigator();


	return (
		/* <View style={styles.flexItem1}>
			< GuessNumber />
			</View> */
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Calculator" component={Calculator} />
				<Stack.Screen name="History" component={CalcHistory} />
			</Stack.Navigator>

		</NavigationContainer>


	)
}
