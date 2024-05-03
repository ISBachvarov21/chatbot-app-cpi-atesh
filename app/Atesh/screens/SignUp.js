import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
  Text,
  TextInput,
} from "react-native";

export default function SignUp({ navigation }) {
  return (
    <LinearGradient colors={["#FF686B", "#7678ED"]} style={styles.container}>
      <Text style={styles.regText}>Let's Sign Up!</Text>
      <Text style={styles.logQuest}>
        Already have an account?{" "}
        <Text
          style={styles.logText}
          onPress={() => navigation.navigate("SignIn")}
        >
          SignIn!
        </Text>
      </Text>
      <TextInput
        style={styles.inputs}
        placeholder="First name"
        placeholderTextColor={"black"}
      />
      <TextInput
        placeholder="Username"
        placeholderTextColor={"black"}
        style={styles.inputs}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor={"black"}
        style={styles.inputs}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"black"}
        style={styles.inputs}
      />
      <TouchableOpacity style={styles.signupButton}>
        <Text>Sign up!</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
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
    color:"white",
  },
  logText: {
    color: "blue",
  },
  logQuest: {
    fontSize: 20,
    color:"white"
  },
  signupButton: {
    backgroundColor: "#32CD32",
    width: 130,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
