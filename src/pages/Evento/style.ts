import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
  },

  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    marginBottom: 8, 
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    gap: 20,
  },

  titleContainer: {
    gap: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ff385C',
    letterSpacing: -0.5,
  },

  subtitle: {
    color: '#717171',
    fontSize: 15,
    fontWeight: '500',
  },

  searchContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
  },

  searchIcon: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },

  searchInput: {
    width: '100%',
    height: 48,
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 25,
    paddingLeft: 45,
    paddingRight: 20,
    fontSize: 14,
    color: '#222222',
  },

  cardContainer: {
    paddingHorizontal: 20,
    marginBottom: 16, 
  },

  listContent: {
    paddingBottom: 120, 
  },

  loadingWrapper: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },

  loadingText: {
    color: '#717171',
    fontSize: 14,
    fontWeight: '500',
  },

  emptyText: {
    textAlign: 'center',
    color: '#717171',
    fontSize: 16,
    marginTop: 100,
  }
});