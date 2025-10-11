import { StyleSheet } from 'react-native';

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
export default styles;