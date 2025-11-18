const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4F8EF7',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },

  // Chat
  chatContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 5,
  },
  userMsg: {
    backgroundColor: '#4F8EF7',
    alignSelf: 'flex-end',
  },
  aiMsg: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  userText: {
    color: '#fff',
    fontSize: 16,
  },
  aiText: {
    color: '#000',
    fontSize: 16,
  },

  // Input
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 45,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#4F8EF7',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
  audioButton: {
    backgroundColor: '#FF5252',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
});

export default styles;