import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ title, username, userInitial, logo, onBackPress }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      
      <View style={styles.leftArea}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        {onBackPress && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={30} color="#1A498A" />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.userArea}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{userInitial}</Text>
        </View>
        <Text style={styles.username}>{username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    position: 'relative',
  },
  leftArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 28,
    height: 28,
    marginBottom: 4,
  },
  backButton: {
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    bottom: 10,
  },
  userArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#1A498A',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: '#1A498A',
    fontWeight: '600',
  },
});

export default Header;
