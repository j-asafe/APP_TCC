import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/HeaderStyle';

const Header = ({ title, username, userInitial, logo, onBackPress }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const parentNav = navigation.getParent();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <View style={styles.leftArea}>
        {onBackPress && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={28} color="#1A498A" />
          </TouchableOpacity>
        )}
        <Image source={logo} style={styles.logo} />
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      <TouchableOpacity
        style={styles.userArea}
        onPress={() => parentNav?.navigate('EditarPerfil')}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{userInitial}</Text>
        </View>
        <Text style={styles.username}>{username}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
