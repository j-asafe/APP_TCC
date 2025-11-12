// screens/TermosScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TermosScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#4B6CB7', '#182848']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 22, color: '#fff', fontWeight: 'bold', marginBottom: 20 }}>
          Termos de Uso
        </Text>

        <Text style={{ color: '#fff', fontSize: 16, marginBottom: 20, lineHeight: 22 }}>
          Ao utilizar este aplicativo, você concorda em fornecer informações verdadeiras e a não utilizar o sistema
          para fins ilícitos. Suas informações serão tratadas de acordo com nossa política de privacidade.  
          O não cumprimento destas condições pode resultar no encerramento da conta.
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#007BFF',
            paddingVertical: 12,
            borderRadius: 10,
            alignItems: 'center',
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default TermosScreen;
