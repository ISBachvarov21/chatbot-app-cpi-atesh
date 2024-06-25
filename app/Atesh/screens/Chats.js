import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Text,
  TextInput,
  Modal,
  View,
  Pressable,
  Alert,
  ScrollView,
  SafeAreaView
} from "react-native";

export default function SignIn({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (


    <LinearGradient colors={["#FF686B", "#7678ED"]} style={styles.screen}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalScreen}>
          <View style={styles.boxCreateChat}>
            <Text style={styles.infoBox}>Let's create Room!</Text>
            <TextInput
              placeholder="Enter a title!"
              placeholderTextColor={"white"}
              style={styles.inputTitle} />
            <Pressable style={styles.createBtn} onPress={() => navigation.navigate("ChatRoom")}>
              <Text style={styles.btnText}>Create Chat!</Text>
            </Pressable>
            <View>

            </View>
          </View>
        </View>
      </Modal>
      <Text style={styles.info}>Hello there! I am Atesh let's chat! First create chat and you can find me in the room.</Text>
      <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
        <Text style={styles.plusSymb}>+</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.chatRooms}>
        <View style={styles.example}>
          <Text style={styles.chatTitle}>Title</Text>
        </View>
      </ScrollView>


    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems:"center"
  },
  info: {
    color: "white",
    fontSize: 30,
    width: 350,
    marginTop:50,
    textAlign: "center"
  },
  addBtn: {
    backgroundColor: "white",
    borderRadius: 100,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  plusSymb: {
    fontSize: 25
  },
  inputTitle: {
    margin: 25,
    width: 150,
    height: 40,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 100,
    color: "white"
  },
  modalScreen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(217, 217, 217,  0.82)",


  },
  boxCreateChat: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    backgroundColor: "white",
    borderRadius: 30,

  },
  createBtn: {
    backgroundColor: "black",
    width: 100,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white"
  },
  infoBox: {
    fontSize: 22
  },
  chatRooms: {
    height: 500,
    width: 300,
    marginTop:50,
    backgroundColor: "white",
    alignItems:"center",
    borderRadius:20
  },
  example: {
    width: 270,
    height:80,
    marginTop: 15,
    borderRadius:10,
    backgroundColor: "black",
    justifyContent:"center"
  },
  chatTitle:{
    color:"white",
    marginLeft:10,
    fontSize:25,
  }
});
