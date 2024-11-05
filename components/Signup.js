import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo1.jpg')} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#000000"/>
      <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#000000"/>
      <TextInput
        style={styles.input} placeholder="Email" placeholderTextColor="#000000" keyboardType="email-address"
      />
      <TextInput
        style={styles.input} placeholder="Password" placeholderTextColor="#000000" secureTextEntry
      />
      <TextInput
        style={styles.input} placeholder="Confirm Password" placeholderTextColor="#000000" secureTextEntry
      />
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ForgotPass')}  
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
        <Text style={styles.linkText}>Forgot your password? Click Here</Text>
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

  linkText: {
    color: '#000000',
    marginTop: 20,
  },
});

export default Signup;
