// AIInterviewScreenHybrid.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
// import axios from 'axios'; // Descomente quando for usar a API real

// const OPENAI_API_KEY = 'SUA_CHAVE_AQUI'; // Coloque sua chave aqui depois

const AIInterviewScreenHybrid = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([
    { id: '1', text: 'Olá! Vamos começar a entrevista?', sender: 'ai' }
  ]);
  const [inputText, setInputText] = useState('');
  const [recording, setRecording] = useState(null);
  const flatListRef = useRef(null);

  // Solicita permissão de microfone
  const requestMicrophonePermission = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Habilite o microfone nas configurações do dispositivo.');
        return false;
      }
      return true;
    } catch {
      Alert.alert('Erro', 'Não foi possível acessar o microfone.');
      return false;
    }
  };

  // Enviar mensagem (texto ou transcrição)
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const newMsg = { id: Date.now().toString(), text, sender: 'user' };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');

    // ================================
    // AQUI É ONDE VOCÊ COLOCARÁ SUA API
    // ================================
    // Exemplo com API real:
    /*
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        { model: 'gpt-3.5-turbo', messages: [{ role: 'user', content: text }] },
        { headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}` } }
      );
      const aiText = response.data.choices[0].message.content;
      setMessages(prev => [...prev, { id: Date.now().toString() + 'ai', text: aiText, sender: 'ai' }]);
    } catch (err) {
      console.error(err);
      Alert.alert('Erro', 'Não foi possível se comunicar com a IA.');
    }
    */

    // Resposta simulada enquanto não houver API
    setTimeout(() => {
      const aiReply = { id: Date.now().toString() + 'ai', text: `IA (simulada) responde: "${text.split('').reverse().join('')}"`, sender: 'ai' };
      setMessages(prev => [...prev, aiReply]);
    }, 1000);
  };

  // Gravar áudio
  const startRecording = async () => {
    const hasPermission = await requestMicrophonePermission();
    if (!hasPermission) return;

    try {
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
    } catch {
      Alert.alert('Erro', 'Não foi possível iniciar a gravação.');
    }
  };

  const stopRecording = async () => {
    try {
      if (!recording) return;
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);

      // ================================
      // AQUI É ONDE VOCÊ COLOCARÁ A TRANSCRIÇÃO DA API
      // ================================
      // Exemplo OpenAI Whisper:
      /*
      const formData = new FormData();
      formData.append('file', { uri, type: 'audio/wav', name: 'audio.wav' });
      formData.append('model', 'whisper-1');
      const response = await axios.post(
        'https://api.openai.com/v1/audio/transcriptions',
        formData,
        { headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'multipart/form-data' } }
      );
      const transcribedText = response.data.text;
      sendMessage(transcribedText);
      */

      // Transcrição simulada
      const transcribedText = '[Áudio transcrito simulado]';
      sendMessage(transcribedText);

    } catch {
      Alert.alert('Erro', 'Não foi possível processar o áudio.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMsg : styles.aiMsg]}>
      <Text style={item.sender === 'user' ? styles.userText : styles.aiText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Entrevista IA</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.chatContainer}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
        onLayout={() => flatListRef.current.scrollToEnd({ animated: true })}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua pergunta..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={() => sendMessage(inputText)} style={styles.sendButton}>
          <Icon name="send" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPressIn={startRecording} onPressOut={stopRecording} style={styles.audioButton}>
          <Icon name="mic" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AIInterviewScreenHybrid;
