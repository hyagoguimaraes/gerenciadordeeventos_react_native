import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  topNav: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    zIndex: 1000,
  },

  navContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 60, 
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  logoText: {
    fontSize: 22,
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },

  logoutButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff385C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'ios' ? 90 : 75,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    zIndex: 1000,
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },

  iconCircle: {
    padding: 6,
    borderRadius: 20,
  },

  iconCircleActive: {
    backgroundColor: '#fff0f3',
  },

  navText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#717171',
  },
  
  navTextActive: {
    color: '#ff385C',
  },
});