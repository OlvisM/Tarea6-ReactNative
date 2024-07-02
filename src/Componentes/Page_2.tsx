import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import adulto from '../img/adulto.jpg';
import joven from '../img/Joven.png';
import Chicos from '../img/Chicos.png';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [ageGroup, setAgeGroup] = useState('');

  const fetchAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      const { age } = response.data;
      setAge(age);

      if (age < 30) {
        setAgeGroup('Joven');
        <Image
        style={styles.image}
        source={Chicos}
      />
      } else if (age >= 30 && age < 60) {
        setAgeGroup('Adulto');
       <Image
        style={styles.image}
        source={joven}
      />
      } else {
        setAgeGroup('Anciano');
         <Image
        style={styles.image}
        source={adulto}
      />
      }
    } catch (error) {
      console.error('Error fetching age:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="Determinar Edad" onPress={fetchAge} />

      {age !== null && (
        <View style={styles.ageContainer}>
          <Text style={styles.ageText}>Edad: {age}</Text>
          <Text style={styles.ageGroupText}>{ageGroup}</Text>

        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    borderRadius: 10,
  },
  ageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  ageText: {
    fontSize: 18,
    marginBottom: 10,
  },
  ageGroupText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 20,
  },
});

export default App;
