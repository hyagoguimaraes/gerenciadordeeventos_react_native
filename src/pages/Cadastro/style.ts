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
    padding: 24,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  backButtonText: {
    marginLeft: 8,
    color: '#717171',
    fontSize: 16,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ff385C',
  },

  subtitle: {
    textAlign: 'center',
    color: '#717171',
    marginBottom: 24,
  },

  passwordWrapper: {
    width: '100%',
    position: 'relative'
  },

  eyeButton: {
    position: 'absolute',
    right: 12,
    top: 15
  },

  requirementContainer: {
    marginTop: 8,
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    gap: 4,
  },

  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  requirementText: {
    fontSize: 12,
    color: '#A0A0A0',
    fontWeight: '500',
  },

  requirementMet: {
    color: '#2dcc70',
  }
});