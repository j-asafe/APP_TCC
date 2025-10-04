import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming Expo icons are available

const SimulAIDashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bem Vindo, Alvin!</Text>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => navigation.navigate("ProfileSettings")}>
          <Text style={styles.avatarText}>A</Text>
          <Text style={styles.juniorText}>Júnior</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar entrevistas..."
            placeholderTextColor="#888"
          />
        </View>

        <TouchableOpacity style={styles.newInterviewButton}>
          <Text style={styles.newInterviewButtonText}>Começar nova entrevista</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.newInterviewButton} onPress={() => navigation.navigate("AIInterviewChat")}>
          <Text style={styles.newInterviewButtonText}>Iniciar Chat com IA</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Minhas Entrevistas</Text>
        <View style={styles.interviewCard}>
          <Text style={styles.interviewTitle}>Entrevista 1</Text>
          <View style={styles.interviewStatus}>
            <Text style={styles.interviewStatusText}>Feedback disponível</Text>
            <Ionicons name="checkmark-circle" size={20} color="#28A745" />
          </View>
        </View>
        <View style={styles.interviewCard}>
          <Text style={styles.interviewTitle}>Entrevista 2</Text>
          <View style={styles.interviewStatus}>
            <Text style={styles.interviewStatusText}>Não concluída</Text>
            <Ionicons name="hourglass-outline" size={20} color="#FFC107" />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Feedback Inteligente</Text>
        <View style={styles.feedbackCard}>
          <Text style={styles.feedbackTitle}>Painel de Progresso</Text>
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabel}>Comunicação</Text>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: '85%' }]} />
            </View>
            <Text style={styles.progressPercentage}>85%</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabel}>Confiança</Text>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: '78%' }]} />
            </View>
            <Text style={styles.progressPercentage}>78%</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressLabel}>Clareza</Text>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: '92%' }]} />
            </View>
            <Text style={styles.progressPercentage}>92%</Text>
          </View>
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
  newInterviewButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  newInterviewButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
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
  interviewStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interviewStatusText: {
    fontSize: 14,
    color: '#666666',
    marginRight: 5,
  },
  feedbackCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressLabel: {
    width: 100,
    fontSize: 14,
    color: '#333333',
  },
  progressBarBackground: {
    flex: 1,
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  progressPercentage: {
    fontSize: 14,
    color: '#333333',
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

export default SimulAIDashboard;
