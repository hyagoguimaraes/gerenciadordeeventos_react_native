import React from "react";
import { View, Text, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LogOut, User, Sparkles } from "lucide-react-native";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";

export function Navbar() {
  const { logout } = useAuth();
  const navigation = useNavigation<any>();

  const handleLogout = () => {
    Alert.alert("Sair", "Deseja realmente sair da conta?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Sair", onPress: () => logout() }
    ]);
  };

  const paddingTop = Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 44;

  return (
    <View style={[styles.topNav, { paddingTop }]}>
      <View style={styles.navContent}>
        <TouchableOpacity
          style={styles.logo}
          onPress={() => navigation.navigate("Home")}
          activeOpacity={0.7}
        >
          <Sparkles size={24} color="#ff385C" strokeWidth={2.5} />
          <Text style={styles.logoText}>VibeCheck</Text>
        </TouchableOpacity>

        <View style={styles.userActions}>
          <View style={styles.userBadge}>
            <User size={18} color="#484848" />
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <LogOut size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}