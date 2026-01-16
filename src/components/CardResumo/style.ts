import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16, 
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 12, 
    width: '100%',
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#fff0f3', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    flexDirection: 'column',
  },
  titleText: {
    color: '#717171',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  valueText: {
    color: '#222',
    fontSize: 22,
    fontWeight: '800',
  },
});