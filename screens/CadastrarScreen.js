import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../services/api';
import styles from '../styles/CadastrarStyle';

const CadastrarScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [idade, setIdade] = useState(0);
  const [confirmSenha, setConfirmSenha] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const validarSenha = (senha) => {
    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    return regex.test(senha);
  };

  const handleSignUp = async () => {
    if (!nome || !email || !senha || !confirmSenha || !idade) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (!validarSenha(senha)) {
      Alert.alert(
        'Senha inválida',
        'A senha deve ter no mínimo 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial.'
      );
      return;
    }

    if (senha !== confirmSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    if (!acceptTerms) {
      Alert.alert('Erro', 'Você deve aceitar os Termos de Uso.');
      return;
    }

    const data = {
      name: nome,
      email: email,
      age: idade,
      password: senha
    }

    console.log(data)

    setLoading(true);
    try {
      const response = await api.post('/user', data, {
        headers: {
          "X-Client-Agent": "MeuAppMobile/1.0 (React Native)"
        }
      });
      console.log(response)
      console.log(response.data)

      if (response) {
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro', response.data?.message || 'Falha ao criar conta.');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error.response?.data || error.message);
      console.log(error.message)
      if (error.response?.status === 404) {
        Alert.alert(
          'Erro',
          'Endpoint /register não encontrado. Verifique a rota do backend.'
        );
      } else {
        Alert.alert('Erro', 'Não foi possível conectar-se ao servidor.');
      }
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
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Criar Conta</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#666"
            value={nome}
            onChangeText={setNome}
          />
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
            placeholder="Idade"
            placeholderTextColor="#666"
            value={idade}
            onChangeText={setIdade}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#666"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            placeholderTextColor="#666"
            secureTextEntry
            value={confirmSenha}
            onChangeText={setConfirmSenha}
          />

          <View style={styles.termsContainer}>
            <Switch
              onValueChange={setAcceptTerms}
              value={acceptTerms}
              trackColor={{ false: '#767577', true: '#007BFF' }}
              thumbColor={acceptTerms ? '#FFFFFF' : '#f4f3f4'}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('TermosScreen')}
            >
              <Text style={styles.termsTextLink}>Ler Termos de Uso</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              (!acceptTerms || loading) && styles.buttonDisabled,
            ]}
            disabled={!acceptTerms || loading}
            onPress={handleSignUp}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Criar Conta</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Já tem uma conta? Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CadastrarScreen;
