import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, CheckBox } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox, Chip, IconButton, MD3LightTheme } from "react-native-paper";



export default function ViewLocations({locationitem}) {

  const [newuser, savennewUser] = useState('uusiuser');

  const [showlocation, setshowLocation] = useState(locationitem?.showlocation ?? false)

  function locationChanged(){
    setshowLocation(!showlocation)
    
  
  }

  const chipStyle = {
        ...styles.todoChip,
        backgroundColor: showlocation ? MD3LightTheme.colors.primaryContainer
            : MD3LightTheme.colors.onTertiary
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
     <View>
       
       <Ionicons style={{textAlign: 'center', padding: 10}} name="location-outline" size={100} color="black" />

       <Text style={{fontSize: 22, textAlign: 'center', fontFamily: 'Al Nile'}}>Hello {newuser}!</Text>

       <View style={styles.separator}></View>

       <Text style={{textAlign: 'center', fontFamily: 'Al Nile', fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Here are list of current locations, you can also delete them if you wish!</Text>


       <Checkbox
        status={showlocation ? 'checked' : 'unchecked'}
        onPress={locationChanged}
        />
        


        
       

       


     
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

