import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Check, Eye, EyeOff, Sparkles, X } from "lucide-react-native";
import authService from "../../service/authService";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { styles } from "./style";

export function Cadastro() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [showSenha, setShowSenha] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });
  const requirements = [
    { label: "Mínimo 6 caracteres", met: form.senha.length >= 6 },
    { label: "Letra maiúscula", met: /[A-Z]/.test(form.senha) },
    { label: "Letra minúscula", met: /[a-z]/.test(form.senha) },
    { label: "Número", met: /[0-9]/.test(form.senha) },
    { label: "Especial (@#$%)", met: /[!@#$%^&*]/.test(form.senha) },
  ];

  const isPasswordValid = requirements.every(req => req.met);

  async function handleSubmit() {
    if (Object.values(form).some(value => value.trim() === "")) {
      return Alert.alert("Campos vazios", "Por favor, preencha todos os campos.");
    }

    if (!isPasswordValid) {
      return Alert.alert("Senha insegura", "A senha não atende a todos os requisitos de segurança.");
    }

    if (form.senha !== form.confirmarSenha) {
      return Alert.alert("Erro", "As senhas digitadas não são iguais.");
    }

    setLoading(true);
    try {
      await authService.register({
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      });

      Alert.alert("Sucesso!", "Conta criada. Agora você já pode fazer login.", [
        { text: "Ir para Login", onPress: () => navigation.navigate("Login" as never) }
      ]);
    } catch (error: any) {
      const message = error.response?.data?.message || "Não foi possível realizar o cadastro.";
      Alert.alert("Erro no Cadastro", message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.form}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            disabled={loading}
          >
            <ArrowLeft size={20} color="#717171" />
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Sparkles size={32} color="#ff385C" />
            <Text style={styles.title}>VibeCheck</Text>
          </View>

          <Text style={styles.subtitle}>Crie sua conta</Text>

          <Input
            placeholder="Nome Completo"
            value={form.nome}
            onChangeText={(txt) => setForm(prev => ({ ...prev, nome: txt }))}
            autoCorrect={false}
          />

          <Input
            placeholder="E-mail de Acesso"
            value={form.email}
            onChangeText={(txt) => setForm(prev => ({ ...prev, email: txt }))}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.passwordWrapper}>
            <Input
              placeholder="Senha (mín. 6 dígitos)"
              value={form.senha}
              onChangeText={(txt) => setForm(prev => ({ ...prev, senha: txt }))}
              secureTextEntry={!showSenha}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowSenha(!showSenha)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              {showSenha ? <EyeOff size={22} color="#717171" /> : <Eye size={22} color="#717171" />}
            </TouchableOpacity>
          </View>

          <Input
            placeholder="Confirmar Senha"
            value={form.confirmarSenha}
            onChangeText={(txt) => setForm(prev => ({ ...prev, confirmarSenha: txt }))}
            secureTextEntry={!showSenha}
          />

          <View style={styles.requirementContainer}>
            {requirements.map((req, index) => (
              <View key={index} style={styles.requirementItem}>
                {req.met ? (
                  <Check size={14} color="#2dcc70" strokeWidth={3} />
                ) : (
                  <X size={14} color="#E0E0E0" strokeWidth={3} />
                )}
                <Text style={[styles.requirementText, req.met && styles.requirementMet]}>
                  {req.label}
                </Text>
              </View>
            ))}
          </View>

          <Button
            onPress={handleSubmit}
            disabled={loading}
            title={loading ? "Criando conta..." : "Criar conta"}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}