// navigation/RootNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Telas principais
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastrarScreen from '../screens/CadastrarScreen';
import QualificacaoScreen from '../screens/QualificacaoScreen';
import EditarPerfilScreen from '../screens/EditarPerfilScreen';

// Telas do Tab Navigator
import SimulAIDashboard from '../screens/SimulAIDashboard';
import HistoryScreen from '../screens/HistoricoScreen';
import SettingsScreen from '../screens/ConfiguracaoScreen';
import AjudaScreen from '../screens/AjudaScreen';
import lnterviewChatScreen from '../screens/InterviewChatScreen.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'SimulAIDashboard':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'History':
              iconName = focused ? 'time' : 'time-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            case 'Help':
              iconName = focused ? 'help-circle' : 'help-circle-outline';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1A498A',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#FFFFFF' },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="SimulAIDashboard"
        component={SimulAIDashboard}
        options={{ title: 'SimulAI' }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{ title: 'Histórico' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Configurações' }}
      />
      <Tab.Screen
        name="Help"
        component={AjudaScreen}
        options={{ title: 'Ajuda' }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={CadastrarScreen} />
      <Stack.Screen name="Qualification" component={QualificacaoScreen} />
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfilScreen} />
      <Stack.Screen name="InterviewChat" component={lnterviewChatScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
