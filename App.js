import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import MyTabs, { MyDrawer } from './src/Navegacion/DrawerNav';

export default function App() {
  return (
   <NavigationContainer>
    <MyTabs></MyTabs>
   </NavigationContainer>
  );
}

