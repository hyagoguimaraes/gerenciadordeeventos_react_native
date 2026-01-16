import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Eye, EyeOff, Sparkles } from "lucide-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/AuthContext";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { styles } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackList } from "../../@types/navigation";

type LoginScreenProp = StackNavigationProp<StackList, 'Login'>;

export function Login() {
  const { login } = useContext(AuthContext);
  const navigation = useNavigation<LoginScreenProp>();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function checkRememberedEmail() {
      const savedEmail = await AsyncStorage.getItem('@VibeCheck:rememberedEmail');
      if (savedEmail) setEmail(savedEmail);
    }
    checkRememberedEmail();
  }, []);

  async function handleLogin() {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    setLoading(true);
    try {
      await login({ email, senha });
    } catch (error) {
      Alert.alert("Erro", "Credenciais inválidas!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.form}>
          <View style={styles.logoContainer}>
            <Sparkles size={48} color="#ff385C" />
            <Text style={styles.title}>VibeCheck</Text>
          </View>

          <Text style={styles.subtitle}>Acesse sua conta para gerenciar eventos</Text>

          <Input
            placeholder="E-mail do Administrador"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.passwordWrapper}>
            <Input
              placeholder="Sua Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={22} color="#717171" /> : <Eye size={22} color="#717171" />}
            </TouchableOpacity>
          </View>

          <Button
            loading={loading}
            onPress={handleLogin}
          >
            Entrar
          </Button>

          <TouchableOpacity
            style={styles.registerLink}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.registerText}>
              Não tem uma conta? <Text style={styles.registerBold}>Cadastrar-se</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}