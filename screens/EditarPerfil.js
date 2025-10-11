import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Header from '../header/Header.js';
import styles from '../styles/EditarPerfilStyle.js';

const ProfileSettingsScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
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

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Confirmar Senha</Text>
          <TextInput
            style={styles.input}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileSettingsScreen;
