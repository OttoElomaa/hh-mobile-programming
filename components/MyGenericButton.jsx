import { Pressable, Text, StyleSheet, Alert } from 'react-native';


export default function MyGenericButton(props) {


	const buttonPressed = () => {
		Alert.alert("Button 1 pressed");
	};

	const styles = StyleSheet.create({
		button: {
			borderRadius: 25,
			paddingVertical: 10,
			paddingHorizontal: 20,
			justifyContent: 'center',
			alignItems: 'center',
		},
		buttonText: {
			color: 'white',
			fontSize: 22,
			fontWeight: "bold"
		},
	});


	return (
		<Pressable
			style={({ pressed }) => [
				styles.button,
				{ backgroundColor: pressed ? 'darkred' : 'orange' },
			]}
			onPress={props.function}
		>
			<Text style={styles.buttonText}>{props.text}</Text>
		</Pressable>
	);
}




