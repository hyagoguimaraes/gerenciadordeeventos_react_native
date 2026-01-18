import React, { useCallback, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Alert, TextInput } from "react-native";
import { Search } from "lucide-react-native";
import { useEvents } from "../../hooks/useEvents";
import { useEventModal } from "../../hooks/useEventModal";
import { EventCard } from "../../components/EventCard";
import { Navbar } from "../../components/NavBar";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./style";

export function Eventos() {
  const { loading, buscarEventos, deletarEvento, filtrarEventos } = useEvents();
  const { openModal } = useEventModal();
  const [search, setSearch] = useState("");

  useFocusEffect(
    useCallback(() => {
      buscarEventos();
    }, [])
  );

  const dadosFiltrados = filtrarEventos(search);

  const handleConfirmDelete = (id: number) => {
    Alert.alert(
      "Excluir Evento",
      "Tem certeza que deseja excluir este evento?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", style: "destructive", onPress: () => deletarEvento(id) }
      ]
    );
  };

  return (
    <View style={styles.mainWrapper}>
      <Navbar />

      <FlatList
        data={dadosFiltrados}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Meus Eventos</Text>
              <Text style={styles.subtitle}>Gerencie suas programações e atividades</Text>
            </View>

            <View style={styles.searchContainer}>
              <Search size={18} color="#717171" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar por nome ou local..."
                placeholderTextColor="#717171"
                value={search}
                onChangeText={setSearch}
                autoCapitalize="none"
              />
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <EventCard
              evento={item}
              onEdit={() => openModal(item)}
              onDelete={() => item.id && handleConfirmDelete(item.id)}
            />
          </View>
        )}
        style={styles.container}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <View style={styles.loadingWrapper}>
              <ActivityIndicator size="large" color="#ff385C" />
              <Text style={styles.loadingText}>Carregando eventos...</Text>
            </View>
          ) : (
            <Text style={styles.emptyText}>Nenhum evento encontrado.</Text>
          )
        }
      />
    </View>
  );
}