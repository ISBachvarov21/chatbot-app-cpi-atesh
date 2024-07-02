import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Pressable, View, StyleSheet, StatusBar, Platform, Text, TextInput, TouchableOpacity, ScrollView, FlatList, SectionList } from 'react-native'

export default function ChatRoom({navigation}) {
  return (
    
      <LinearGradient colors={["#FF686B", "#7678ED"]} style={styles.screen}>
        <View style={styles.chatRoom}>
          <ScrollView contentContainerStyle={styles.chats}>
            <View style={styles.example}>
              <View style={styles.image}>
                <Text>ISD</Text>
              </View>
              <View style={styles.mesage}>
                <Text style={styles.mesageText}>Text</Text>
              </View>
              
            </View>
            
            
          </ScrollView>
          <View style={styles.inputField}>
            
            <TextInput
              style={styles.inputMesage}
              placeholder='Enter text!'
              placeholderTextColor={"black"}
            />
            <Pressable style={styles.sendBtn}>
              
            </Pressable>
          </View>
        </View>

      </LinearGradient>

  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center"
  },
  chatRoom: {
    flex:1,
    alignItems:"center",
    width:"100%"
    
  },
  inputField:{
    flexDirection:'row',
    bottom:50,
    alignItems:"center"
  },
  inputMesage:{
    backgroundColor:"white",
    width:290,
    height:70,
    borderRadius:10,
    fontSize:20,
    overflow:"scroll",

  },
  sendBtn:{
    width:50,
    height:50,
    backgroundColor:"green",
    marginLeft:10,
    borderRadius:100
  },
  chats:{
    height: 670,
    width: 350,
    marginTop:20,
    backgroundColor: "white",
    alignItems:"center",
    borderRadius:20,
    
    
  },
  example:{
    flexDirection:"row",
    alignItems:"center",
    width:300,
    height:50,
    marginTop:20
  },
  backBtn:{
    backgroundColor:"red",
    width:50,
    height:50,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center"
  },
  image:{
    height:50,
    width:50,
    borderRadius:100,
    backgroundColor:"rgba(217, 217, 217,  0.82)",
    justifyContent:"center",
    alignItems:"center",
    
  },
  mesageText:{
    color:"black",
    fontSize:18,
    marginLeft:10
    
  },
  mesage:{
    backgroundColor:"rgba(217, 217, 217,  0.82)",
    marginLeft:10,
    height:50,
    width:250,
    borderRadius:10
    
    
  }
});