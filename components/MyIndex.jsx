import { View } from "react-native";
import MyGenericButton from "./MyGenericButton";
import styles from '../styles/Styles'

export default function MyIndex({ navigation }) {

	const buttonPressed = (text) => {
		navigation.navigate(text)
	};

	return (

		<View style={styles.container}>
			<MyGenericButton
				function={() => buttonPressed("Calculator")}
				text="Calculator App" />

			<MyGenericButton
				function={() => buttonPressed("Guess")}
				text="Guess the Number" />

			<MyGenericButton
				function={() => buttonPressed("Foods")}
				text="Search Recipes" />

			<MyGenericButton
				function={() => buttonPressed("MoneyRates")}
				text="Exchange Rates App" />

			<MyGenericButton
				function={() => buttonPressed("MapApp")}
				text="My Cool Map App" />
		</View>
	)


}