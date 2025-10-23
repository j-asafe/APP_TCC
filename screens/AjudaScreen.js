import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, LayoutAnimation, Platform, UIManager, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../header/Header.js';
import styles from '../styles/AjudaStyle.js';

const AjudaScreen = ({ navigation }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const faqs = [
    { question: 'Como redefinir minha senha?', answer: 'Você pode redefinir sua senha através da opção "Esqueci minha senha" na tela de login.' },
    { question: 'Como agendar uma nova entrevista?', answer: 'Para agendar uma nova entrevista, vá para a tela principal e clique no botão "Começar nova entrevista".' },
    { question: 'Posso ver o feedback de entrevistas anteriores?', answer: 'Sim, todos os feedbacks de entrevistas concluídas estão disponíveis na seção "Histórico".' },
    { question: 'Como atualizar minhas informações de perfil?', answer: 'Suas informações de perfil podem ser atualizadas na tela de "Configurações de Perfil", acessível através das Configurações.' },
    { question: 'Quais são os requisitos de sistema para o aplicativo?', answer: 'O aplicativo é compatível com dispositivos iOS e Android a partir das versões X e Y, respectivamente.' },
  ];

  const toggleFAQ = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const message = 'Olá, preciso de ajuda com o aplicativo.';
    const url = `https://wa.me/${+5511990062510}?text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          alert('Não foi possível abrir o WhatsApp.');
        }
      })
      .catch(err => console.error('Erro ao abrir WhatsApp:', err));
  };

  return (
    <View style={styles.container}>
      <Header
        title="AJUDA"
        username="Júnior"
        userInitial="A"
        logo={require('../assets/logoHeader.png')}
        onBackPress={() => navigation.goBack()}
      />
      
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Perguntas Frequentes</Text>

        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <TouchableOpacity 
              key={index} 
              style={styles.faqItem} 
              onPress={() => toggleFAQ(index)}
              activeOpacity={0.8}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                <Ionicons 
                  name={isOpen ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color="#333" 
                />
              </View>

              {isOpen && (
                <View style={styles.faqAnswerContainer}>
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                </View>
              )}
            </TouchableOpacity>
          )
        })}

        <View style={styles.needHelpContainer}>
          <Text style={styles.needHelpTitle}>Precisa de Mais Ajuda?</Text>
          <Text style={styles.needHelpText}>
            Se você não encontrou o que procurava, nossa equipe de suporte está pronta
          </Text>
          <TouchableOpacity style={styles.contactButton} onPress={openWhatsApp}>
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AjudaScreen;
