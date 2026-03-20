import { StyleSheet, View, Text } from "react-native"
import { LocationContext } from "./FirestoreController";
import { useContext } from "react";
import ViewLocations from "./ViewLocations";
import LocationList from "./LocationList";
import { Ionicons } from '@expo/vector-icons';


export default function LocationView(){

    
    const locations = useContext(LocationContext);

    return(
        <View style={styles.container}>
            <Ionicons style={{textAlign: 'center', padding: 10}} name="location-outline" size={100} color="black" />

            <Text style={{fontSize: 22, textAlign: 'center', fontFamily: 'Al Nile'}}>Hello Uusiuser!</Text>

            <View style={styles.separator}></View>

            <Text style={{textAlign: 'center', fontFamily: 'Al Nile', fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Here are list of current locations, you can also delete them if you wish!</Text>
            <LocationList locations={locations}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    gap: 10
  },
});