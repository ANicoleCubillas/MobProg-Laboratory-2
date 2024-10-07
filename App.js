import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // Importing MaterialIcons

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBackgroundPlay, setIsBackgroundPlay] = useState(false);
  const [isWiFiOnly, setIsWiFiOnly] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);

  // Toggle functions for each switch
  const toggleDarkMode = () => setIsDarkMode((prevState) => !prevState);
  const toggleBackgroundPlay = () => setIsBackgroundPlay((prevState) => !prevState);
  const toggleWiFiOnly = () => setIsWiFiOnly((prevState) => !prevState);
  const toggleAutoplay = () => setIsAutoplay((prevState) => !prevState);

  // Use dynamic styles based on the theme
  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header with Logout Icon */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="sign-out" size={24} color={isDarkMode ? '#BB86FC' : '#007AFF'} />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <Image
            source={require('./assets/profile.jpg')} // Placeholder for avatar
            style={styles.avatar}
          />
          <Text style={styles.username}>Arabiela Cubillas</Text>
          <Text style={styles.email}>nicolecubillas@gmail.com</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit profile</Text>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <Text style={styles.sectionTitle}>Content</Text>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <MaterialIcon name="favorite-border" size={24} color={isDarkMode ? '#BB86FC' : '#007AFF'} />
            <Text style={styles.listText}>Favorites</Text>
          </View>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <MaterialIcon name="file-download" size={24} color={isDarkMode ? '#BB86FC' : '#007AFF'} />
            <Text style={styles.listText}>Downloads</Text>
          </View>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>

        {/* Preferences Section */}
        <Text style={styles.sectionTitle}>Preferences</Text>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <Icon name="language" size={24} color={isDarkMode ? '#BB86FC' : '#007AFF'} />
            <Text style={styles.listText}>Language</Text>
          </View>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <Icon name="bell-o" size={24} color={isDarkMode ? '#BB86FC' : '#007AFF'} />
            <Text style={styles.listText}>Notifications</Text>
          </View>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
        <View style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <MaterialIcon name="brightness-6" size={24} color={isDarkMode ? '#BB86FC' : '#007AFF'} />
            <Text style={styles.listText}>Dark Mode</Text>
          </View>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
        <View style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <MaterialIcon name="play-arrow" size={24} color={isDarkMode ? '#BB86FC' : '#007AFF'} />
            <Text style={styles.listText}>Background play</Text>
          </View>
          <Switch value={isBackgroundPlay} onValueChange={toggleBackgroundPlay} />
        </View>
        <View style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <MaterialIcon name="wifi" size={24} color={isDarkMode ? '#BB86FC' : '#007AFF'} />
            <Text style={styles.listText}>Download via WiFi only</Text>
          </View>
          <Switch value={isWiFiOnly} onValueChange={toggleWiFiOnly} />
        </View>
        <View style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <MaterialIcon name="autorenew" size={24} color={isDarkMode ? '#BB86FC' : '#007AFF'} />
            <Text style={styles.listText}>Autoplay</Text>
          </View>
          <Switch value={isAutoplay} onValueChange={toggleAutoplay} />
        </View>
      </ScrollView>
    </View>
  );
}


// Function to create dynamic styles based on the current theme
const createStyles = (isDarkMode) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#121212' : '#E3F9FD',
      // Apply the gradient only in light mode
      paddingTop: 50,
    },
    scrollContainer: {
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingBottom: 20,
    },
    profileContainer: {
      alignItems: 'center',
      marginBottom: 30,
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 80,
      marginBottom: 10,
    },
    username: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? '#FFFFFF' : '#000000',
    },
    email: {
      fontSize: 16,
      color: isDarkMode ? '#BBBBBB' : '#666',
      marginBottom: 10,
    },
    editButton: {
      backgroundColor: isDarkMode ? '#BB86FC' : '#007AFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    editButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: isDarkMode ? '#BB86FC' : '#000',
      marginBottom: 10,
    },
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#333333' : '#ccc',
    },
    listItemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    listText: {
      fontSize: 16,
      marginLeft: 15,
      color: isDarkMode ? '#FFFFFF' : '#000000',
    },
    arrow: {
      fontSize: 16,
      color: isDarkMode ? '#BB86FC' : '#007AFF',
    },
  });
};
