import { StatusBar } from 'expo-status-bar';
import { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { addLocation, LocationContext } from './FirestoreController';
import Entypo from '@expo/vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function AddLocations() {


  const [newuser, savennewUser] = useState('uusiuser');

  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const newlocations = useContext(LocationContext)


  function addLocations2() {
    addLocation(location, description);
    setLocation('');
    setDescription('');
  }


  useEffect(() => {
    getUser();
  }, []);

  
  

  async function saveUser(){

   await AsyncStorage.setItem("username", newuser)



  }


  async function getUser(){

   const getuser = await AsyncStorage.getItem('username');



  }


  


  return (

     <View styles={{flex: 1, width: '100%'}}>
       
       <Entypo style={{textAlign: 'center', padding: 50}} name="location" size={125} color="blue" />

       <Text style={{fontSize: 30, textAlign: 'center', fontFamily: 'Al Nile'}}>Hello {newuser}!</Text>

       <View style={styles.separator}></View>

       <TextInput
         placeholder='Add location name'
         value={location}
         onChangeText={setLocation}
        />

        <TextInput
         placeholder='Add location description'
         value={description}
         onChangeText={setDescription}
        />

    
        
    

       <Button title='Add location' onPress={addLocations2}></Button>




     </View>
  );
}


const styles = StyleSheet.create({
  separator: {
    height: 4,
    backgroundColor: '#f06565',
    color: 'blue',
    width: '100%',
    marginTop: 10
  },
});




