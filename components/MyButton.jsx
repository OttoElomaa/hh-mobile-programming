import { Pressable, Text, StyleSheet, Alert } from 'react-native';

const RoundedRedButton = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? 'darkred' : 'orange' },
      ]}
      onPress={() => buttonPressed()}
    >
      <Text style={styles.buttonText}>Press me</Text>
    </Pressable>
  );
};

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
    fontSize: 16,
  },
});

export default RoundedRedButton;