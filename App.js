import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        alert("sos re gato");
      }}
    >
      <View style={styles.container}>
        <Text>Hola mundo!</Text>
        <Button
          onPress={() => {
            alert("You tapped the button!");
          }}
          title="Press Me"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
