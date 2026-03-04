import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native';
import Login from './components/Login';

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
     <View style={styles.container}>
       <Login></Login>


       <StatusBar style="auto" />
     </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    borderWidth: 7,
    borderColor: '#f06565',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
