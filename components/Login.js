import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, SafeAreaView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import { use, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { signIn } from './FirebaseAuth';
import { Navigation } from '../App';
import Home from './Home';
import AddLocations from './AddLocations';
import ViewLocations from './ViewLocations';



export default function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    async function sign() {
      const error = await signIn(email, password);
          if (error) {
              Alert.alert('Login failed', error.message);
          }

      }

  

 return (

    <View style={{width:'100%', flex: 1, justifyContent: 'flex-start', alignItems:'center'}}>

      <SafeAreaView>

        
        <Text style={{marginBottom: 50, textAlign: 'center', fontSize: 45, fontFamily: 'Al Nile', fontWeight: 'bold'}}>Location App</Text>

        <MaterialIcons style={{textAlign: 'center', marginBottom: 60}} name="card-travel" size={175} color="blue" />

        <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={{marginBottom: 20, textAlign: 'center', fontSize: 15, backgroundColor: "#f06565", borderWidth: 2}}/>

        <TextInput placeholder='Password' secureTextEntry value={password} onChangeText={setPassword}  style={{textAlign: 'center', fontSize: 15, backgroundColor: "#f06565", borderWidth: 2 }}/>

        <View style={{marginTop: 40, justifyContent: 'flex-start', alignItems:'center', backgroundColor: 'blue' }}>

         <Button title='Login' color="white" onPress={sign}>{'Login'}</Button>

        </View>

      </SafeAreaView>

    </View>

  );


}