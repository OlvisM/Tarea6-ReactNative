import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import FotoPerfil from '../img/Icon.jpeg'
export default function App() {
  return (
    <View style={styles.container}>
       <View>
      <Image
        style={{borderRadius: 10, width: 150, height: 150, marginBottom:50, justifyContent: 'center', alignSelf: 'center'}}
        source={FotoPerfil}
      />
    </View>
<View style={{alignSelf: 'center'}}>
  <Text style={{fontSize: 20}}> Me llamo olvis Enmanuel Mejia Paredes</Text>
  <Text style={{fontSize: 20}}> Soy estudiante del Instuituto Tecnologico de las Amerias</Text>
  <Text style={{fontSize: 20}}> Linkedin: Olvis Mejia</Text>
  <Text style={{fontSize: 20}}>GitHub: https://github.com/OlvisM </Text>  
      <StatusBar style="auto" /> 
      
</View>
      
   
  
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
});
