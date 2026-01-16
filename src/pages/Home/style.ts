import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  welcomeCard: {
    backgroundColor: '#FF385C',
    margin: 20,
    padding: 32,
    borderRadius: 24,
    shadowColor: '#ff385c',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },

  welcomeTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 34,
    marginBottom: 12,
  },

  welcomeSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
  },

  statsContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },

  seeAll: {
    color: '#FF385C',
    fontWeight: '600',
    fontSize: 14,
    textDecorationLine: 'underline'
  },
  
  eventList: {
    paddingHorizontal: 20,
  }
});