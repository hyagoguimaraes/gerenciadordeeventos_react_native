import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MapPin, Calendar, Edit3, Trash2 } from 'lucide-react-native';
import { styles } from './style';
import { Evento } from '../../@types/event';

interface EventCardProps {
  evento: Evento;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function EventCard({ evento, onEdit, onDelete }: EventCardProps) {
  const dataFormatada = React.useMemo(() => 
    new Date(evento.data).toLocaleDateString('pt-BR'), 
  [evento.data]);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: evento.imagem || 'https://via.placeholder.com/400' }}
          style={styles.image}
          fadeDuration={300} 
        />

        <View style={styles.actionOverlay}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onEdit}
            activeOpacity={0.8}
          >
            <Edit3 size={18} color="#222" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={onDelete}
            activeOpacity={0.8}
          >
            <Trash2 size={18} color="#ff385c" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {evento.nome}
        </Text>

        <View style={styles.locationContainer}>
          <MapPin size={14} color="#ff385c" />
          <Text style={styles.locationText}>
            {evento.cidade}, {evento.uf}
          </Text>
        </View>

        <View style={styles.dateContainer}>
          <Calendar size={14} color="#484848" />
          <Text style={styles.dateText}>
            {dataFormatada}
          </Text>
        </View>
      </View>
    </View>
  );
}