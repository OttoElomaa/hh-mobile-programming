import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";

import { useState } from "react";
import MyGenericButton from "./MyGenericButton";
import styles from "../styles/Styles";

import MapView, { Marker } from "react-native-maps";

// navigation prop is passed in to every screen component in stack navigator
export default function MapApp({ navigation }) {
  return (
    <View>
      <Text>moi</Text>

      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 60.200692,
          longitude: 24.934302,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        }}
      >
        <Marker
          coordinate={{
            latitude: 60.201373,
            longitude: 24.934041,
          }}
          title="Haaga-Helia"
        />
      </MapView>
    </View>
  );
}
