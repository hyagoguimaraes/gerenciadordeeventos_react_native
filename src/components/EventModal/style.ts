import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  uploadSection: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    position: 'relative',
  },

  previewImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },

  uploadContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    zIndex: 2,
  },

  uploadLabel: {
    fontWeight: '600',
    fontSize: 14,
    color: '#717171',
    marginTop: 8,
  },

  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start'
  },
  
  quickButtons: {
    flexDirection: 'row',
    gap: 8,
    marginTop: -10,
    marginBottom: 15,
  },

  quickButton: {
    flex: 1,
    height: 32,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  quickButtonActive: {
    backgroundColor: '#ff385c',
    borderColor: '#ff385c',
  },

  quickButtonText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#717171',
  },

  quickButtonTextActive: {
    color: '#fff',
  },

  submitButton: {
    backgroundColor: '#ff385c',
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  submitButtonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  }
});