import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPass = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo1.jpg')} style={styles.logo} />
      <Text style={styles.title}>Password Recovery</Text>
      
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#00000" keyboardType="email-address" />
      
      <TouchableOpacity 
        style={styles.button} onPress={() => alert('Password recovery code sent!')} >
        <Text style={styles.buttonText}>Send Recovery Link</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Text style={styles.linkText}>Recovery Code Not Sent? Click Here.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#000',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  buttonText: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    color: '#ffff', 
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  linkText: {
    color: '#000000',
    marginTop: 20,
  },
});

export default ForgotPass;
