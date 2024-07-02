import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';

const SiteUrl = 'https://www.tonal.com';
const TonalAPI = 'https://www.tonal.com/wp-json/wp/v2';

const App: React.FC = () => {
  const [siteLogo, setSiteLogo] = useState<string | null>(null);
  const [latestPosts, setLatestPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchSiteLogo();
    fetchLatestPosts();
  }, []);

  const fetchSiteLogo = async () => {
    try {
      // Realiza la solicitud para obtener el logo del sitio (hipotético)
      const response = await fetch(`${TonalAPI}/media?per_page=1`); // Ajustar según la estructura real de la API
      if (!response.ok) {
        throw new Error('Failed to fetch site logo');
      }
      const data = await response.json();
      setSiteLogo(data[0]?.source_url);
    } catch (error) {
      console.error('Error fetching site logo:', error);
    }
  };

  const fetchLatestPosts = async () => {
    try {
      // Realiza la solicitud para obtener las últimas noticias o publicaciones
      const response = await fetch(`${TonalAPI}/posts?per_page=3`);
      if (!response.ok) {
        throw new Error('Failed to fetch latest posts');
      }
      const data = await response.json();
      setLatestPosts(data);
    } catch (error) {
      console.error('Error fetching latest posts:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {siteLogo && (
        <Image source={{ uri: siteLogo }} style={styles.logo} />
      )}

      <View style={styles.newsContainer}>
        {latestPosts.map((post) => (
          <TouchableOpacity
            key={post.id}
            style={styles.newsItem}
            onPress={() => Linking.openURL(post.link)}
          >
            <Text style={styles.newsTitle}>{post.title.rendered}</Text>
            <Text style={styles.newsSummary}>{post.excerpt.rendered.replace(/<[^>]+>/g, '')}</Text>
            <Text style={styles.readMore}>Ver noticia completa</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  newsContainer: {
    width: '100%',
  },
  newsItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsSummary: {
    fontSize: 14,
    marginBottom: 5,
  },
  readMore: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default App;
