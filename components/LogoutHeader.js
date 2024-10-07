import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LogoutHeader({ styles, isDarkMode }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="sign-out" size={24} color={isDarkMode ? '#BB86FC' : '#007AFF'} />
      </TouchableOpacity>
    </View>
  );
}
