import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, SafeAreaView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Login() {

  return (

    <View style={{width:'100%', Flex: 1, justifyContent: 'flex-start', alignItems:'center'}}>

      <SafeAreaView>

        
        <Text style={{marginBottom: 50, textAlign: 'center', fontSize: '45', fontFamily: 'Al Nile', fontWeight: 'bold'}}>Location App</Text>

        <MaterialIcons style={{textAlign: 'center', marginBottom: 60}} name="card-travel" size={175} color="blue" />

        <TextInput style={{marginBottom: 20, textAlign: 'center', fontSize: '15', backgroundColor: "#f06565", borderWidth: 2}}>Email</TextInput>

        <TextInput style={{textAlign: 'center', fontSize: '15', backgroundColor: "#f06565", borderWidth: 2 }}>Password</TextInput>

        <View style={{marginTop: 40, Flex: 1, justifyContent: 'flex-start', alignItems:'center', backgroundColor: 'blue' }}>

         <Button color="white" title="Login"/>

        </View>

      </SafeAreaView>

    </View>

  );



}

const loginnappi = StyleSheet.create({



});