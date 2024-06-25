import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Text,
  TextInput,
} from "react-native";

export default function SignIn({ navigation }) {
  return (
    <LinearGradient colors={["#FF686B", "#7678ED"]} style={styles.screen}>
      <Text style={styles.regText}>Let's Sign In!</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor={"black"}
        style={styles.inputs}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"black"}
        style={styles.inputs}
      />
      <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate("Chats")}>
        <Text>Sign in!</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    margin: 25,
    width: 270,
    height: 40,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 100,
  },
  regText: {
    fontSize: 40,
    color: "white"
  },
  logText: {
    color: "blue",
  },
  logQuest: {
    fontSize: 20,
  },
  signinButton: {
    backgroundColor: "#32CD32",
    width: 130,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
