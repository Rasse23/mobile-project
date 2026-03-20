import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native';
import UserProvider from './components/UserProvider';
import { useContext, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';
import ViewLocations from './components/ViewLocations';
import AddLocations from './components/AddLocations';
import { AuthContext, AuthProvider } from './components/FirebaseAuth';
import { LocationProvider } from './components/FirestoreController';
import LocationView from './components/LocationView';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
     <View style={styles.container}>

       <AuthProvider>
         <LocationProvider>
           <Navigation/>
         </LocationProvider>

       </AuthProvider>


       <StatusBar style="auto" />
     </View>
   </SafeAreaView>
  );
}


export function Navigation(){

  const { loggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {loggedIn ? (
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={Home}/>
          <Drawer.Screen name='Add locations' component={AddLocations}/>
          <Drawer.Screen name='View locations' component={LocationView}/>
        </Drawer.Navigator>
      ) : (
        <Login/>
      )}
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    borderWidth: 7,
    borderColor: '#f06565',
    backgroundColor: '#fff',
  },
});
