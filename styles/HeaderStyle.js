import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    height: 150, // maior para deixar espaço para seta + logo
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },

  leftArea: {
    flexDirection: 'column', // seta em cima da logo
    alignItems: 'center',
  },

  backButton: {
    marginBottom: 4, // distância entre a seta e a logo
  },

  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  title: {
    flex: 1,
    textAlign: 'center',
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

export default styles;
