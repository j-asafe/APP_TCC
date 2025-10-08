import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Header from '../header/Header.js';

const ProfileSettingsScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [curriculo, setCurriculo] = useState(null);

  const handleSelectCurriculo = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf'],
      copyToCacheDirectory: true,
      multiple: false,
    });

    if (result.canceled) {
      console.log('Usuário cancelou');
      return;
    }

    const file = result.assets[0];
    console.log('Arquivo selecionado:', file);
    setCurriculo(file);
  } catch (error) {
    Alert.alert('Erro', 'Não foi possível selecionar o arquivo.');
    console.log(error);
  }
};

  return (
    <View style={styles.container}>
      <Header
        title="EDITAR PERFIL"
        username="Júnior"
        userInitial="A"
        logo={require('../assets/logoHeader.png')}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView style={styles.content}>
        <View style={styles.profileHeader}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileAvatarText}>A</Text>
          </View>
          <Text style={styles.profileName}>Alvin Harris</Text>
        </View>

        <Text style={styles.sectionTitle}>Informações Pessoais</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Nome Completo</Text>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Idade</Text>
          <TextInput style={styles.input} value={idade} onChangeText={setIdade} keyboardType="numeric" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Currículo</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={handleSelectCurriculo}>
            <Text style={styles.uploadButtonText}>
              {curriculo ? curriculo.name : 'Selecionar arquivo'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  profileAvatar: {
    backgroundColor: '#1A498A',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileAvatarText: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  uploadButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#1A498A',
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#1A498A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileSettingsScreen;

