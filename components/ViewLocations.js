import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, CheckBox } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox, Chip, IconButton, MD3LightTheme } from "react-native-paper";
import { useContext } from 'react';
import { LocationContext } from './FirestoreController';



export default function ViewLocations({locationitem}) {


  const [showlocation, setshowLocation] = useState(locationitem?.showlocation ?? false)

  function locationChanged(){
    setshowLocation(!showlocation)
    
  
  }

  const chipStyle = {
        ...styles.todoChip,
        backgroundColor: showlocation ? MD3LightTheme.colors.primaryContainer
            : MD3LightTheme.colors.onTertiary
    }


  





  return (
     <View>
  


       {locationitem && (

       <Text style={[styles.locationText, {fontSize: 7 }]}>
         {locationitem.locationText} - {locationitem.description} - Rating: {locationitem.starrating}
       </Text>

       )}

    


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

