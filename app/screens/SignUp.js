import React ,{useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  Text,
  TextInput,
} from "react-native";
import { userAPI } from "../apis/userAPI";


export default function SignUp({ navigation }) {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  
  
  
  const handleSignUp = () =>{
    
    const data = {
        username: username,
        password: password
    }
    
    userAPI.signUp(data)
    navigation.navigate("Home")
  }
  return (
    <LinearGradient colors={["#FF686B", "#7678ED"]} style={styles.screen}>
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
        placeholder="Username"
        placeholderTextColor={"black"}
        style={styles.inputs}
        onChangeText={setUserName}
        
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"black"}
        style={styles.inputs}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp} >
        <Text>Sign up!</Text>
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
    color: "white",
  },
  logText: {
    color: "blue",
  },
  logQuest: {
    fontSize: 20,
    color: "white"
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
