import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Pressable,
  View,
  StyleSheet,
  StatusBar,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Chat with ai",
  },
  {
    id: "2",
    title: "Chat with ai",
  },
  
];

const Item = ({ title }) => {
  return (
    <View style={styles.example}>
      <View style={styles.image}>
        <Text>ISD</Text>
      </View>
      <View style={styles.mesage}>
        <Text style={styles.mesageText}>{title}</Text>
      </View>
    </View>
  );
};

export default function ChatRoom() {
  return (
    <LinearGradient colors={['#BDC0C6', '#7678ED']} style={styles.screen}>
      
      <View style={styles.messagesContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          style={styles.inputMesage}
          placeholder="Enter text!"
          placeholderTextColor={"black"}
        />
        <Pressable style={styles.sendBtn}></Pressable>
      </View>
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

  inputField: {
    flexDirection: "row",
    bottom: 30,
    alignItems: "center",
  },
  inputMesage: {
    backgroundColor: "white",
    width: 290,
    height: 70,
    borderRadius: 10,
    fontSize: 20,
    overflow: "scroll",
  },
  sendBtn: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    marginLeft: 10,
    borderRadius: 100,
  },
  chats: {
    height: 670,
    width: 350,
    marginTop: 20,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
  },
  example: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    height: 50,
    marginTop: 20,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "rgba(217, 217, 217,  0.82)",
    justifyContent: "center",
    alignItems: "center",
  },
  mesageText: {
    color: "black",
    fontSize: 18,
    marginLeft: 10,
  },
  mesage: {
    backgroundColor: "rgba(217, 217, 217,  0.82)",
    marginLeft: 10,
    height: 50,
    width: 230,
    borderRadius: 10,
  },
  messagesContainer: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 20,
    height: 670,
    width: 350,
    marginBottom: 50,
  },
});
