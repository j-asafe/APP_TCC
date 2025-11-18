import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../services/api';
import styles from "../styles/LoginStyle";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    const data = {
      email: email.trim(),
      password: senha
    }
    setLoading(true);
    try {
      // Envia a requisição de login para a API
      const response = await api.post('/login', data, {
        headers: {
          "X-Client-Agent": "MeuAppMobile/1.0 (React Native)"
        }
      });

      if (response.data.success) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('MainTabs', { user: response.data.user });
      } else {
        Alert.alert('Erro', response.data.message || 'Email ou senha incorretos.');
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      Alert.alert('Erro', 'Falha ao conectar-se ao servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#4B6CB7', '#182848']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Entre na sua conta</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#666"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity
            style={[styles.button, loading && { opacity: 0.7 }]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}>
            <Text style={styles.linkText}>Acessar App sem login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
