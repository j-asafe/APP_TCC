import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState('Português'); // This would typically be a dropdown or modal
  const [theme, setTheme] = useState('Claro'); // This would typically be a dropdown or modal

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Configurações</Text>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>A</Text>
          <Text style={styles.juniorText}>Júnior</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionHeader}>Notificações</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Permitir Notificações</Text>
          <Switch
            onValueChange={setNotificationsEnabled}
            value={notificationsEnabled}
            trackColor={{ false: "#767577", true: "#007BFF" }}
            thumbColor={notificationsEnabled ? "#FFFFFF" : "#f4f3f4"}
          />
        </View>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Tipos de Notificação</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>

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
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Gerenciar Dados</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('EditarPerfil')}>
          <Text style={styles.settingText}>Configurações de Perfil</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarText: {
    backgroundColor: '#007BFF',
    color: '#FFFFFF',
    borderRadius: 15,
    width: 30,
    height: 30,
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: 'bold',
    marginRight: 5,
  },
  juniorText: {
    fontSize: 14,
    color: '#333333',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 20,
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  settingText: {
    fontSize: 16,
    color: '#333333',
  },
  settingValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: 16,
    color: '#888',
    marginRight: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#888',
  },
  navTextActive: {
    fontSize: 12,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
