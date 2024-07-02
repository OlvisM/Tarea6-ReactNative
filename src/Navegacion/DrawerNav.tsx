import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Page_1 from '../Componentes/Page_1';
import Page_2 from '../Componentes/Page_2';
import Page_3 from '../Componentes/Page_3';
import Page_4 from '../Componentes/Page_4';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page_7 from '../Componentes/Page_7';
import Page_6 from '../Componentes/Page_6';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
     <Drawer.Screen name='Identificar Genero' component={Page_1}></Drawer.Screen>
     <Drawer.Screen name='Identificar Edad' component={Page_2}></Drawer.Screen>
     <Drawer.Screen name='Identificar Universidades' component={Page_3}></Drawer.Screen>
     <Drawer.Screen name='Identificar Clima' component={Page_4}></Drawer.Screen>
     <Drawer.Screen name='WordExpress' component={Page_6}></Drawer.Screen>
    </Drawer.Navigator>
    
  );
} 

export default function MyTabs(){
    return(
   <Tabs.Navigator>
    <Tabs.Screen name='Home' component={MyDrawer} 
    options={{
        tabBarLabel: 'Home',
        tabBarIcon: ()=>(
            <Entypo name="home" size={24} color="black" />
        )}}></Tabs.Screen>
    <Tabs.Screen name='Acount' component={Page_7}
     options={{
      tabBarLabel: 'Home',
      tabBarIcon: ()=>(
        <FontAwesome name="user" size={24} color="black"/>)}}/>

   </Tabs.Navigator>
);
}
