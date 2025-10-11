import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  profileAvatar: {
    backgroundColor: '#1A498A',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileAvatarText: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  uploadButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#1A498A',
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#1A498A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
