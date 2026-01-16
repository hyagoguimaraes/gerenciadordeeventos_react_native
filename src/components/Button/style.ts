import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },

  buttonPrimary: {
    backgroundColor: '#ff385C',
  },

  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ff385C',
  },

  buttonDisabled: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E0E0E0',
    opacity: 0.8,
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
  },

  textPrimary: {
    color: '#fff',
  },
  
  textOutline: {
    color: '#ff385C',
  },
});