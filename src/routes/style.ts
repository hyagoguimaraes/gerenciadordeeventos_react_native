import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  bar: {
    height: Platform.OS === 'ios' ? 85 : 95,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: Platform.OS === 'ios' ? 10 : 15,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },

  viewButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 100,
  },

  iconCircle: {
    padding: 6,
    borderRadius: 16,
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconCircleActive: {
    backgroundColor: '#fff0f3', 
  },
  
  tabLabel: {
    fontSize: 10,
    fontWeight: '600',
  }
});