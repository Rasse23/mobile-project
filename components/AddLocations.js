import { StatusBar } from 'expo-status-bar';
import { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { addLocation, LocationContext } from './FirestoreController';
import Entypo from '@expo/vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from './FirebaseAuth';
import { Alert } from 'react-native';




export default function AddLocations() {


  const [newuser, savennewUser] = useState('uusiuser');

  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [starrating, setstarRating] = useState('');
  const newlocations = useContext(LocationContext)

  if (starrating > 5) {
      Alert.alert('Choose between 0-5 stars') 
      setstarRating('');


  }
    
    
      


  function addLocations2() {
    addLocation(location, description, starrating);
    setLocation('');
    setDescription('');
    setstarRating('');
    Alert.alert('Location added!');
      
  }


  useEffect(() => {
    getUser();
  }, []);

  
  

  async function saveUser(){

   await AsyncStorage.setItem("username", newuser)



  }


  async function getUser(){

   await AsyncStorage.getItem('username');



  }


  


  return (

     <View styles={{flex: 1, width: '100%'}}>
       
       <Entypo style={{textAlign: 'center', padding: 50}} name="location" size={125} color="blue" />

       <Text style={{fontSize: 30, textAlign: 'center', fontFamily: 'Al Nile'}}>Hello {newuser}!</Text>

       <View style={styles.separator}></View>

       <Text style={{textAlign: 'center', fontFamily: 'Al Nile', fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Here you can start adding new locations!</Text>

       <TextInput
         style={{textAlign: 'center', borderColor: '#000',borderWidth: 2, fontFamily: 'Al Nile', fontSize: 12, marginBottom: 15, marginTop: 20}}
         label='Add location name'
         placeholder='Add location name'
         value={location}
         onChangeText={setLocation}
        />

        <TextInput
         style={{textAlign: 'center', borderColor: '#000',borderWidth: 2, fontFamily: 'Al Nile', fontSize: 12, marginBottom: 15}}
         label='Add location description'
         placeholder='Add location description'
         value={description}
         onChangeText={setDescription}
        />


        <TextInput
         style={{textAlign: 'center', borderColor: '#000',borderWidth: 2, fontFamily: 'Al Nile', fontSize: 12}}
         label='Add your star rating as number (1-5)'
         placeholder='Add star rating as number (1-5)'
         value={starrating}
         onChangeText={setstarRating}
         maxLength={1}
         keyboardType='number-pad'
        />



    
        
      <View style={{}}>

       <Button color={'blue'} title='Add location' onPress={addLocations2}></Button>

      </View>

       <View style={styles.separator}></View>


       <View style={{justifyContent: 'flex-start', alignItems:'center', backgroundColor: "#f06565", marginTop: 50}}>
               <Button color="white" title='Log Out' onPress={logout}></Button>
       
       
       </View>




     </View>
  );
}


const styles = StyleSheet.create({
  separator: {
    height: 4,
    backgroundColor: 'black',
    color: 'blue',
    width: '100%',
    marginTop: 10
  },
});




