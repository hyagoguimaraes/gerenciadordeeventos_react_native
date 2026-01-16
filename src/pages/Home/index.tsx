import React, { useCallback } from "react";
import { View, Text, ScrollView, RefreshControl, Alert, TouchableOpacity } from "react-native";
import { Calendar, CheckCircle, MapPin } from "lucide-react-native";
import { useAuth } from "../../hooks/useAuth";
import { useEvents } from "../../hooks/useEvents";
import { useEventModal } from "../../hooks/useEventModal";
import { EventCard } from "../../components/EventCard";
import { CardResumo } from "../../components/CardResumo";
import { Navbar } from "../../components/NavBar"; 
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { styles } from "./style";

export function Home() {
  const { user } = useAuth();
  const navigation = useNavigation<any>();
  const { openModal } = useEventModal();
  const { eventos, loading, buscarEventos, stats, deletarEvento } = useEvents();

  useFocusEffect(
    useCallback(() => {
      buscarEventos();
    }, [])
  );

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

  const proximosEventos = eventos
    .filter(e => new Date(e.data) >= new Date())
    .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())
    .slice(0, 3);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Navbar />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={buscarEventos} tintColor="#ff385C" />}
      >
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>
            Bem-vindo de volta, {user?.nome || 'admin'}!
          </Text>
          <Text style={styles.welcomeSubtitle}>
            Você tem {stats.ativos} eventos agendados para os próximos dias.
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <CardResumo title="Total de Eventos" value={stats.total} icon={Calendar} />
          <CardResumo title="Ativos" value={stats.ativos} icon={CheckCircle} />
          <CardResumo title="Cidades" value={stats.cidades} icon={MapPin} />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Próximos Eventos</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Eventos')}>
            <Text style={styles.seeAll}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.eventList}>
          {proximosEventos.map(evento => (
            <EventCard
              key={evento.id}
              evento={evento}
              onEdit={() => openModal(evento)}
              onDelete={() => handleConfirmDelete(evento.id!)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}