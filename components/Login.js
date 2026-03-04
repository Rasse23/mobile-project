import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, SafeAreaView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { use, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 


export default function Login() {

  

 return (

    <View style={{width:'100%', flex: 1, justifyContent: 'flex-start', alignItems:'center'}}>

      <SafeAreaView>

        
        <Text style={{marginBottom: 50, textAlign: 'center', fontSize: '45', fontFamily: 'Al Nile', fontWeight: 'bold'}}>Location App</Text>

        <MaterialIcons style={{textAlign: 'center', marginBottom: 60}} name="card-travel" size={175} color="blue" />

        <TextInput value={user} onChangeText={setUser} placeholder="Email" style={{marginBottom: 20, textAlign: 'center', fontSize: '15', backgroundColor: "#f06565", borderWidth: 2}}/>

        <TextInput placeholder="Password" style={{textAlign: 'center', fontSize: '15', backgroundColor: "#f06565", borderWidth: 2 }}/>

        <View style={{marginTop: 40, justifyContent: 'flex-start', alignItems:'center', backgroundColor: 'blue' }}>

         <Button title="Login" onPress={saveUser} color="white"/>

        </View>

      </SafeAreaView>

    </View>

  );


}