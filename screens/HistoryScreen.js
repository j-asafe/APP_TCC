import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HistoryScreen = ({ navigation }) => {
  const interviews = [
    { id: '1', title: 'Entrevista de Backend', date: '25/09/2025', status: 'Concluída', feedback: true },
    { id: '2', title: 'Entrevista de Frontend', date: '20/09/2025', status: 'Concluída', feedback: true },
    { id: '3', title: 'Entrevista de UX/UI', date: '15/09/2025', status: 'Não Concluída', feedback: false },
    { id: '4', title: 'Entrevista de DevOps', date: '10/09/2025', status: 'Concluída', feedback: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Histórico</Text>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>A</Text>
          <Text style={styles.juniorText}>Júnior</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {interviews.map((interview) => (
          <View key={interview.id} style={styles.interviewCard}>
            <View>
              <Text style={styles.interviewTitle}>{interview.title}</Text>
              <Text style={styles.interviewDate}>{interview.date}</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.interviewStatus}>{interview.status}</Text>
              {interview.feedback && <Ionicons name="checkmark-circle" size={20} color="#28A745" />}
              {!interview.feedback && interview.status === 'Não Concluída' && <Ionicons name="hourglass-outline" size={20} color="#FFC107" />}
            </View>
          </View>
        ))}
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
  interviewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  interviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  interviewDate: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interviewStatus: {
    fontSize: 14,
    color: '#666666',
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

export default HistoryScreen;
