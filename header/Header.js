import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../header/Header.js';

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
export default Header;
