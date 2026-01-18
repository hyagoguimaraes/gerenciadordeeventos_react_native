import React, { useEffect, useState, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { UploadCloud } from "lucide-react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from "../../hooks/useAuth";
import { useEventModal } from "../../hooks/useEventModal";
import eventService from "../../service/eventService";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { styles } from "./style";

interface EventModalProps {
  onSaveSuccess: () => void;
}

export function EventModal({ onSaveSuccess }: EventModalProps) {
  const { user } = useAuth();
  const { isModalOpen, closeModal, editingEvent } = useEventModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingCep, setIsLoadingCep] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [cepError, setCepError] = useState("");
  const initialFormState = {
    id: undefined as number | undefined,
    nome: "",
    data: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
    imagem: ""
  };
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (isModalOpen) {
      if (editingEvent) {
        setFormData({
          ...editingEvent,
          id: editingEvent.id ?? undefined,
          data: editingEvent.data.split('T')[0]
        });
      } else {
        setFormData(initialFormState);
      }
      setCepError("");
    }
  }, [editingEvent, isModalOpen]);

  const isFormValid = useMemo(() => {
    return (
      formData.nome.trim() !== "" &&
      formData.data !== "" &&
      formData.cep.length === 9 && !cepError &&
      formData.logradouro !== "" &&
      formData.numero.trim() !== "" &&
      formData.imagem !== ""
    );
  }, [formData, cepError]);

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      setFormData(prev => ({ ...prev, data: formattedDate }));
    }
  };

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permissão necessária", "Acesso às fotos é necessário.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
      base64: true,
    });

    if (!result.canceled) {
      setFormData(prev => ({
        ...prev,
        imagem: `data:image/jpeg;base64,${result.assets[0].base64}`
      }));
    }
  };

  const handleBuscaCEP = async (cep: string) => {
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length === 8) {
      setIsLoadingCep(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await response.json();
        if (data.erro) {
          setCepError("CEP não encontrado.");
        } else {
          setCepError("");
          setFormData(prev => ({
            ...prev,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            uf: data.uf,
          }));
        }
      } catch {
        setCepError("Erro na busca.");
      } finally {
        setIsLoadingCep(false);
      }
    }
  };

  const handleSubmit = async () => {
    if (!user?.id) return;
    setIsSubmitting(true);
    try {
      if (formData.id) {
        await eventService.atualizar(formData.id, formData);
      } else {
        await eventService.criar(user.id, formData);
      }
      onSaveSuccess();
      closeModal();
      Alert.alert("Sucesso", "Evento salvo com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o evento.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      title={editingEvent ? "Editar Evento" : "Novo Evento"}
    >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

          <TouchableOpacity style={styles.uploadSection} onPress={handlePickImage}>
            {formData.imagem ? <Image source={{ uri: formData.imagem }} style={styles.previewImage} /> : null}
            <View style={styles.uploadContent}>
              <UploadCloud size={32} color={formData.imagem ? "#ff385c" : "#717171"} />
              <Text style={styles.uploadLabel}>
                {formData.imagem ? "Alterar Foto" : "Subir Foto do Local"}
              </Text>
            </View>
          </TouchableOpacity>

          <Input
            label="Nome do Evento"
            placeholder="Nome do evento"
            value={formData.nome}
            onChangeText={text => setFormData({ ...formData, nome: text })}
          />

          <View style={styles.row}>
            <View style={{ flex: 2 }}>
              <Input
                label="CEP"
                placeholder="00000-000"
                keyboardType="numeric"
                maxLength={9}
                value={formData.cep}
                errorMessage={cepError}
                onChangeText={text => {
                  const formatted = text.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2');
                  setFormData({ ...formData, cep: formatted });
                  handleBuscaCEP(formatted);
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <View pointerEvents="none">
                  <Input
                    label="Data"
                    placeholder="DD/MM/AAAA"
                    value={formData.data ? formData.data.split('-').reverse().join('/') : ""}
                    editable={false}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={formData.data ? new Date(formData.data + "T12:00:00") : new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onChangeDate}
            />
          )}

          <Input
            label="Rua/Avenida"
            value={formData.logradouro}
            editable={false}
            placeholder={isLoadingCep ? "Buscando..." : "Endereço"}
          />

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Input
                label="Número / KM"
                placeholder="Nº / KM"
                value={formData.numero}
                editable={formData.numero !== "S/N"}
                onChangeText={text => setFormData({ ...formData, numero: text })}
              />
              <View style={styles.quickButtons}>
                <TouchableOpacity
                  style={[styles.quickButton, formData.numero === "S/N" && styles.quickButtonActive]}
                  onPress={() => setFormData({ ...formData, numero: formData.numero === "S/N" ? "" : "S/N" })}
                >
                  <Text style={[styles.quickButtonText, formData.numero === "S/N" && styles.quickButtonTextActive]}>S/N</Text>
                </TouchableOpacity>

                {(!formData.numero.includes("KM") && formData.numero !== "S/N") && (
                  <TouchableOpacity
                    style={styles.quickButton}
                    onPress={() => setFormData({ ...formData, numero: "KM " })}
                  >
                    <Text style={styles.quickButtonText}>+ KM</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View style={{ flex: 1.5 }}>
              <Input 
                label="Bairro" 
                placeholder="Bairro"
                value={formData.bairro} 
                editable={false} 
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={{ flex: 3 }}>
              <Input 
                label="Cidade" 
                placeholder="Cidade"
                value={formData.cidade} 
                editable={false} 
              />
            </View>
            <View style={{ flex: 1 }}>
              <Input 
                label="UF"
                placeholder="UF"
                value={formData.uf} 
                editable={false} 
              />
            </View>
          </View>

          <TouchableOpacity
            style={[styles.submitButton, (!isFormValid || isSubmitting) && styles.submitButtonDisabled]}
            onPress={handleSubmit}
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.submitButtonText}>
                {editingEvent ? "Salvar Alterações" : "Criar Evento"}
              </Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}