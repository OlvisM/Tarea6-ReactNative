import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [color, setColor] = useState('white');

  const getGender = async () => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      const gender = response.data.gender;
      setGender(gender);
      setColor(gender === 'male' ? 'blue' : 'pink');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>Enter a name:</Text>
      <TextInput 
        style={styles.input} 
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <Button title="Predict Gender" onPress={getGender} />
      {gender && <Text style={styles.text}>Predicted Gender: {gender}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export default App;
