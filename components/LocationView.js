import { StyleSheet, View } from "react-native"
import { TodoContext } from "../firebase/FirestoreController";
import { useContext } from "react";
import ViewLocations from "./ViewLocations";
import LocationList from "./LocationList";


export default function LocationView(){
    const locations = useContext(LocationContext);

    return(
        <View style={styles.container}>
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