import { StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  topNav: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
    zIndex: 1000,
    elevation: 4,
  },
  navContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60, 
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ff385C',
    letterSpacing: -0.5,
  },
  userActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userBadge: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  logoutButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#ff385C',
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  modalContainer: { 
    backgroundColor: 'white', 
    width: '90%', maxHeight: 
    screenHeight * 0.85, 
    borderRadius: 12, 
    overflow: 'hidden', 
    elevation: 10 
  },

  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ebebeb'
  },

  headerTitle: { 
    flex: 1, 
    textAlign: 'center', 
    color: '#222', 
    fontSize: 16, 
    fontWeight: '700' 
  },

  closeButton: { 
    padding: 4 
  },

  content: { 
    padding: 20
  }
});