import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, CheckBox, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox, Chip, IconButton, MD3LightTheme } from "react-native-paper";
import ViewLocations from './ViewLocations';

export default function LocationList({locations}){

    return(
        <View>
            <FlatList
                data={locations}
                renderItem={({item}) => <ViewLocations locationitem={item}/>}
                
                
            />
        </View>
    );
}