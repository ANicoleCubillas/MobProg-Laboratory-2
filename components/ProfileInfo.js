import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function ProfileInfo({ styles }) {
  return (
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
  );
}
