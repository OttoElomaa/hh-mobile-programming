import {Text, View, FlatList } from 'react-native';
import styles from '../styles/Styles'


export default function CalcHistory({ route }) {

	const {resultsList} = route.params

	return (

		<View style={styles.container}>
			<FlatList
				data={resultsList}
				renderItem={({ item }) =>
					<Text style={[styles.listItem, styles.margin1]}>
						{item.firstNum} {item.operator} {item.secondNum} = {item.result}
					</Text>}
			/>
		</View>
	);

}