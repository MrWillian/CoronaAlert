import React, { useState } from 'react';
import { 
  KeyboardAvoidingView, Platform, TextInput, StyleSheet, TouchableOpacity, Text 
} from 'react-native';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function redirectToLogin() {
    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView 
      behavior='padding'
      enabled={Platform.OS === 'ios'}
      style={styles.container}>
      
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input} 
        placeholder="Digite seu email" 
        placeholderTextColor='#999'
        value={email}
        onChangeText={setEmail} />

      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input} 
        placeholder="Digite seu nome" 
        placeholderTextColor='#999'
        value={name}
        onChangeText={setName} />

      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        style={styles.input} 
        placeholder="Digite sua senha" 
        placeholderTextColor='#999'
        value={password}
        onChangeText={setPassword} />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSignUp} onPress={redirectToLogin}>
        <Text style={styles.buttonSignInText}>Já tem uma conta? Entrar</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 48,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
    color: '#0F0403',
    fontSize: 16
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FA5A2E',
    borderRadius: 4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonSignInText: {
    color: '#999',
    fontWeight: 'bold',
  }
});
