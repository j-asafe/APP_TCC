// SimulaDashboard.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';


const screenWidth = Dimensions.get('window').width;

const SimulaDashboard = () => {
  const navigation = useNavigation();

  // Dados simulados
  const cardsData = [
    { id: '1', title: 'Progresso', value: '75%', icon: 'stats-chart' },
    { id: '2', title: 'Tarefas', value: '12', icon: 'checkbox' },
    { id: '3', title: 'Alertas', value: '3', icon: 'alert-circle' },
  ];

  const listData = [
    { id: '1', title: 'Tarefa 1', status: 'Concluída' },
    { id: '2', title: 'Tarefa 2', status: 'Pendente' },
    { id: '3', title: 'Tarefa 3', status: 'Em andamento' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SimulaDashboard</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-circle-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
        {cardsData.map(card => (
          <View key={card.id} style={styles.card}>
            <Icon name={card.icon} size={25} color="#4F8EF7" />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardValue}>{card.value}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Gráfico */}
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Desempenho</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
          }}
          width={screenWidth - 40}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(79, 142, 247, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: { r: '6', strokeWidth: '2', stroke: '#4F8EF7' },
          }}
          style={{ borderRadius: 16 }}
        />
      </View>

      {/* Lista de Tarefas */}
      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Tarefas Recentes</Text>
        <FlatList
          data={listData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => navigation.navigate('TaskDetail', { taskId: item.id })}
            >
              <Text style={styles.listItemTitle}>{item.title}</Text>
              <Text style={styles.listItemStatus}>{item.status}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Botões rápidos */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('NewTask')}>
          <Text style={styles.actionText}>Nova Tarefa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.actionText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SimulaDashboard;