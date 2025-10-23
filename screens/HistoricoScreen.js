import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import styles from "../styles/HistoricoStyle";
import Header from '../header/Header';

const HistoricoScreen = ({ navigation }) => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInterviews = async () => {
    try {
  
      const response = await axios.get(''); 
      setInterviews(response.data);
    } catch (error) {
      console.error('Erro ao carregar histórico:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

  const handleOpenFeedback = (id) => {
    navigation.navigate('FeedbackScreen', { interviewId: id });
  };

  return (
    <View style={styles.container}>

      <Header
        title="HISTÓRICO"
        username="Júnior"
        userInitial="A"
        logo={require('../assets/logoHeader.png')}
        onBackPress={() => navigation.goBack()}
      />

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007BFF" />
        </View>
      ) : (
        <ScrollView style={styles.content}>
          {interviews.length === 0 ? (
            <Text style={styles.emptyText}>Nenhuma entrevista encontrada.</Text>
          ) : (
            interviews.map((interview) => (
              <TouchableOpacity 
                key={interview._id} 
                style={styles.interviewCard}
                onPress={() => handleOpenFeedback(interview._id)}
              >
                <View>
                  <Text style={styles.interviewTitle}>{interview.title}</Text>
                  <Text style={styles.interviewDate}>{interview.date}</Text>
                </View>
                <View style={styles.statusContainer}>
                  <Text style={styles.interviewStatus}>{interview.status}</Text>
                  {interview.feedback && (
                    <Ionicons name="checkmark-circle" size={20} color="#28A745" />
                  )}
                  {!interview.feedback && interview.status === 'Não Concluída' && (
                    <Ionicons name="hourglass-outline" size={20} color="#FFC107" />
                  )}
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default HistoricoScreen;
