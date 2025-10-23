import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../header/Header';
import styles from '../styles/ConfiguracaoStyle';

const ConfiguracaoScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language] = useState('Português');
  const [theme] = useState('Claro');

  return (
    <View style={styles.container}>

      <Header
        title="CONFIGURAÇÕES"
        username="Júnior"
        userInitial="A"
        logo={require('../assets/logoHeader.png')}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.sectionHeader}>Notificações</Text>

          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Permitir Notificações</Text>
            <Switch
              onValueChange={setNotificationsEnabled}
              value={notificationsEnabled}
              trackColor={{ false: "#767577", true: "#1A498A" }}
              thumbColor={notificationsEnabled ? "#FFFFFF" : "#f4f3f4"}
            />
          </View>

          <Text style={styles.sectionHeader}>Geral</Text>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Idioma</Text>
            <View style={styles.settingValueContainer}>
              <Text style={styles.settingValue}>{language}</Text>
              <Ionicons name="chevron-forward" size={20} color="#888" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Tema</Text>
            <View style={styles.settingValueContainer}>
              <Text style={styles.settingValue}>{theme}</Text>
              <Ionicons name="chevron-forward" size={20} color="#888" />
            </View>
          </TouchableOpacity>

          <Text style={styles.sectionHeader}>Privacidade</Text>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Política de Privacidade</Text>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Termos de Serviço</Text>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('EditarPerfil')}
          >
            <Text style={styles.settingText}>Configurações de Perfil</Text>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ConfiguracaoScreen;
