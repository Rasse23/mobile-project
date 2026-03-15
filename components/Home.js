import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { AuthContext, logout } from './FirebaseAuth';
import { Login } from './Login';
import { useContext, useState } from 'react';
import { signOut } from 'firebase/auth';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function Home() {


  const [newuser, savennewUser] = useState('uusiuser');

  async function saveUser(){

  await AsyncStorage.setItem("username", newuser)


  }

  async function getUser(){

  const getuser = await AsyncStorage.getItem('username');




  }



  

  const { userdata } = useContext(AuthContext);



  return (
     <View>

      <AntDesign style={{textAlign: 'center', padding: 70}} name="home" size={150} color="#f06565" />

      <Text>Welcome {newuser}</Text>

     </View>
  );
}

