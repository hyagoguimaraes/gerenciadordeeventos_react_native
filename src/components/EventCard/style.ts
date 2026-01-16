import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  
  imageContainer: {
    width: '100%',
    aspectRatio: 1, 
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#f0f0f0',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  actionOverlay: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    gap: 8,
  },

  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  info: {
    paddingVertical: 8,
    gap: 4,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginTop: 10,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  locationText: {
    fontSize: 15,
    color: '#717171',
    fontWeight: '400',
  },

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },

  dateText: {
    fontSize: 15,
    color: '#222', 
    fontWeight: '400',
  },
});