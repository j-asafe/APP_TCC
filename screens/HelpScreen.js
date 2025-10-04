import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HelpScreen = ({ navigation }) => {
  const faqs = [
    { question: 'Como redefinir minha senha?', answer: 'Você pode redefinir sua senha através da opção "Esqueci minha senha" na tela de login.' },
    { question: 'Como agendar uma nova entrevista?', answer: 'Para agendar uma nova entrevista, vá para a tela principal e clique no botão "Começar nova entrevista".' },
    { question: 'Posso ver o feedback de entrevistas anteriores?', answer: 'Sim, todos os feedbacks de entrevistas concluídas estão disponíveis na seção "Histórico".' },
    { question: 'Como atualizar minhas informações de perfil?', answer: 'Suas informações de perfil podem ser atualizadas na tela de "Configurações de Perfil", acessível através das Configurações.' },
    { question: 'Quais são os requisitos de sistema para o aplicativo?', answer: 'O aplicativo é compatível com dispositivos iOS e Android a partir das versões X e Y, respectivamente.' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ajuda</Text>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>A</Text>
          <Text style={styles.juniorText}>Júnior</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar tópicos de ajuda..."
            placeholderTextColor="#888"
          />
        </View>

        <Text style={styles.sectionTitle}>Perguntas Frequentes</Text>
        {faqs.map((faq, index) => (
          <TouchableOpacity key={index} style={styles.faqItem}>
            <Text style={styles.faqQuestion}>{faq.question}</Text>
            <Ionicons name="chevron-down" size={20} color="#333" />
          </TouchableOpacity>
        ))}

        <View style={styles.needHelpContainer}>
          <Text style={styles.needHelpTitle}>Precisa de Mais Ajuda?</Text>
          <Text style={styles.needHelpText}>
            Se você não encontrou o que procurava, nossa equipe de suporte está pronta
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  faqItem: {
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
  faqQuestion: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  needHelpContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  needHelpTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  needHelpText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
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

export default HelpScreen;
