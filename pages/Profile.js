
import React, { useState } from 'react';
import { StatusBar, StyleSheet, ScrollView, View } from 'react-native';
import LogoutHeader from '../components/LogoutHeader';
import ProfileInfo from '../components/ProfileInfo';
import ContentSection from '../components/ContentSection';
import PreferencesSection from '../components/PreferencesSection';

export default function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBackgroundPlay, setIsBackgroundPlay] = useState(false);
  const [isWiFiOnly, setIsWiFiOnly] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);

  
  const toggleDarkMode = () => setIsDarkMode((prevState) => !prevState);
  const toggleBackgroundPlay = () => setIsBackgroundPlay((prevState) => !prevState);
  const toggleWiFiOnly = () => setIsWiFiOnly((prevState) => !prevState);
  const toggleAutoplay = () => setIsAutoplay((prevState) => !prevState);

  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LogoutHeader styles={styles} isDarkMode={isDarkMode} />
        <ProfileInfo styles={styles} />
        <ContentSection styles={styles} isDarkMode={isDarkMode} />
        <PreferencesSection
          styles={styles}
          isDarkMode={isDarkMode}
          isBackgroundPlay={isBackgroundPlay}
          isWiFiOnly={isWiFiOnly}
          isAutoplay={isAutoplay}
          toggleDarkMode={toggleDarkMode}
          toggleBackgroundPlay={toggleBackgroundPlay}
          toggleWiFiOnly={toggleWiFiOnly}
          toggleAutoplay={toggleAutoplay}
        />
      </ScrollView>
    </View>
  );
}


const createStyles = (isDarkMode) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#121212' : '#fff',
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
