import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { AuthContext, logout } from './FirebaseAuth';
import { Login } from './Login';
import { useContext, useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function Home() {


  const [newuser, savennewUser] = useState('uusiuser');

  async function saveUser(){

  await AsyncStorage.setItem("username", newuser)


  }

  useEffect(() => {
    saveUser();
  } ,  []);


  async function getUser(){

  const getuser = await AsyncStorage.getItem('username');



 }




  return (
     <View styles={{flex: 1, width: '100%'}}>

      <AntDesign style={{textAlign: 'center', padding: 70}} name="home" size={150} color="#f06565" />

      <View style={styles.separator}></View>

      <Text style={{fontSize: 30, textAlign: 'center', padding: 40, fontFamily: 'Al Nile'}}>Welcome {newuser}!</Text>

      <View style={styles.separator}></View>

      <Text style={{fontSize: 16, textAlign: 'center', padding: 40, fontFamily: 'Al Nile'}}>You can start by opening the drawer navigation menu and adding or viewing locations.</Text>

      <View style={{justifyContent: 'flex-start', alignItems:'center', backgroundColor: "#f06565"}}>
        <Button color="white" title='Log Out' onPress={logout}></Button>


      </View>

     </View>
  );
}


const styles = StyleSheet.create({
  separator: {
    height: 4,
    backgroundColor: 'blue',
    color: 'blue',
    width: '100%',
  },
});
