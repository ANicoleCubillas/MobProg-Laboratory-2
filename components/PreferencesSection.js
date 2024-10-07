// PreferencesSection.js
import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function PreferencesSection({ styles, isDarkMode, isBackgroundPlay, isWiFiOnly, isAutoplay, toggleDarkMode, toggleBackgroundPlay, toggleWiFiOnly, toggleAutoplay }) {
  return (
    <>
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
    </>
  );
}
