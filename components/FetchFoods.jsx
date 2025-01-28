import { Alert, FlatList, Image, Text, TextInput, View } from "react-native";
import styles from '../styles/Styles'
import { useEffect, useState } from "react";
import MyGenericButton from "./MyGenericButton";



export default function FetchFoods({ navigation }) {


	useEffect(() => getFoods(), [])

	const [foods, setFoods] = useState([])
	const [searchTerm, setSearchTerm] = useState("")

	const getFoods = () => {
		fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' +  searchTerm ,
			{ method: 'GET' })
			.then(response => {
				//Alert.alert("Hi. step 1")
				return response.json()
			})
			.then(data => {
				console.log("data ", data.meals);
				// Handle data
				setFoods(data.meals);

			})
			.catch(err => {
				// Something went wrong
			});
	}

	return (
		<View style={styles.container}>
			<Text style={styles.myHeader}>Browse meal recipes</Text>

			<TextInput style={[styles.myInputField, styles.margin1]}
				placeholder="Enter search term"
				value={searchTerm}
				onChangeText={t => setSearchTerm(t)}
				keyboardType="text"
			/>
			<MyGenericButton
				function={getFoods}
				text="Search"
			/>

			<FlatList
				data={foods}
				ItemSeparatorComponent={() => <View
						style={[height=10]}
					  />}
					
				  
				renderItem={({ item }) =>
					<View style={styles.margin1}>
						<Text style={[styles.listItem]}>
							{item.strMeal}
						</Text>
						<Image style={[styles.listItem, { width: 250, height: 150 }]}
							source={{ uri: item.strMealThumb }}
						/>
					</View>
				}
			/>
		</View>
	)

}

