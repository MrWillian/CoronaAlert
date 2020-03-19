import React, { useState, useEffect } from 'react';
import { 
  KeyboardAvoidingView, Platform, Text, StyleSheet, TextInput, TouchableOpacity 
} from 'react-native';

import { getItemStorage, setItemStorage } from '../utils/Storage';
import { login } from '../controllers/AuthController';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getItemStorage('user').then(user => {
      if (user) {
        navigation.navigate('Main', { user });
      }
    });
  }, []);

  async function handleLogin() {
    try {
      const id = await login(email, password);
      setItemStorage('user', id);
      navigation.navigate('Main', {user: id});
    } catch(error) {
      console.log('Usuário não existe!', error);
    }
  }

  async function redirectRegister() {
    navigation.navigate('Register');
  }

  return (
    <KeyboardAvoidingView
      behavior='padding'
      enabled={Platform.OS === 'ios'}
      style={styles.container}
    >
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input} 
        placeholder="Digite seu email" 
        placeholderTextColor='#999'
        value={email}
        onChangeText={setEmail} />

      <TextInput 
        autoCorrect={false}
        secureTextEntry={true}
        style={styles.input} 
        placeholder="Digite sua senha" 
        placeholderTextColor='#999'
        value={password}
        onChangeText={setPassword} />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSignUp} onPress={redirectRegister}>
        <Text style={styles.buttonSignUpText}>Criar uma conta</Text>
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
  buttonSignUp: {

  },
  buttonSignUpText: {
    color: '#999',
    fontWeight: 'bold',
  }
});
