import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    padding: 24,
  },
  
  form: {
    backgroundColor: '#fff',
    padding: 32,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 25,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ff385C',
    letterSpacing: -1,
  },

  subtitle: {
    textAlign: 'center',
    color: '#717171',
    fontSize: 14,
    marginBottom: 24,
  },

  passwordWrapper: {
    position: 'relative',
    width: '100%',
  },

  eyeButton: {
    position: 'absolute',
    right: 12,
    top: 15,
  },

  registerLink: {
    marginTop: 20,
    alignItems: 'center',
  },

  registerText: {
    color: '#717171',
    fontSize: 14,
  },

  registerBold: {
    color: '#ff385C',
    fontWeight: '700',
  }
});