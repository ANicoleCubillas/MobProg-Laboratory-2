import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function ContentSection({ styles, isDarkMode }) {
  return (
    <>
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
    </>
  );
}
