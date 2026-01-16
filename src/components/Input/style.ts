import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 6,
    width: '100%',
    marginBottom: 12,
  },

  label: {
    fontSize: 14,
    color: '#222',
    fontWeight: '500',
  },

  labelActive: {
    color: '#ff385c',
  },

  field: {
    width: '100%',
    height: 45,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#222',
  },

  fieldFocused: {
    borderColor: '#ff385c',
    backgroundColor: '#fff0f2',
  },

  fieldError: {
    borderColor: '#ff385c',
    backgroundColor: '#fff8f6',
  },

  errorText: { 
    color: '#ff385c', 
    fontSize: 11, 
    marginTop: 2, 
    fontWeight: '500' 
  }
});