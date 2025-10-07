import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ title, username, userInitial, logo, onBackPress }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <View style={styles.leftArea}>
        {onBackPress && (
          <TouchableOpacity onPress={onBackPress}>
            <Image source={logo} style={styles.logo} />
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
  },
  leftArea: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  logo: {
    width: 28,
    height: 28,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
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
