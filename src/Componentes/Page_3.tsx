import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Linking, StyleSheet } from 'react-native';

const UniversityList = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUniversities = async () => {
    if (!country) return;

    setLoading(true);
    try {
      const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
      const data = await response.json();
      setUniversities(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter country name en english"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Search" onPress={fetchUniversities} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={universities}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.universityContainer}>
              <Text style={styles.universityName}>{item.name}</Text>
              <Text>{item.domains[0]}</Text>
              <Text
                style={styles.link}
                onPress={() => Linking.openURL(item.web_pages[0])}
              >
                {item.web_pages[0]}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  universityContainer: {
    marginBottom: 30,
    borderRadius: 10,
    borderBlockColor: '#f1f1f1',
  },
  universityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default UniversityList;
