import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/QualificacaoStyle";

const QaulificacaoScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    'Excelente, consigo desenvolver com autonomia',
    'Boa, consigo desenvolver com alguma orientação',
    'Razoável, preciso de muita orientação',
    'Básica, estou começando'
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#007AFF" />
        </TouchableOpacity>

        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarLetter}>E</Text>
          </View>
          <Text style={styles.levelText}>Júnior</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Qual é seu nível de qualificação?</Text>

        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option && styles.optionSelected
            ]}
            onPress={() => setSelectedOption(option)}
          >
            <View style={styles.radioOuter}>
              {selectedOption === option && <View style={styles.radioInner} />}
            </View>
            <Text
              style={[
                styles.optionText,
                selectedOption === option && styles.optionTextSelected
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedOption && styles.continueButtonDisabled
          ]}
          disabled={!selectedOption}
          onPress={() => navigation.navigate('SimulAIDashboard')}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default QaulificacaoScreen;
