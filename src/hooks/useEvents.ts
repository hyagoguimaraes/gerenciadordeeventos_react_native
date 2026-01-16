import { useState, useCallback, useMemo } from 'react';
import { Alert } from 'react-native';
import Fuse from 'fuse.js'; 
import eventService from '../service/eventService';
import { Evento } from '../@types/event';
import { useAuth } from './useAuth';

export function useEvents() {
  const { user } = useAuth();
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(false);

  const buscarEventos = useCallback(async () => {
    if (!user?.id) return;

    try {
      setLoading(true);
      const { data } = await eventService.listar(user.id);
      setEventos(data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os eventos.");
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  const deletarEvento = useCallback(async (id: number) => {
    try {
      await eventService.deletar(id);
      setEventos(prev => prev.filter(e => e.id !== id));
      Alert.alert("Sucesso", "Evento removido.");
    } catch (error) {
      Alert.alert("Erro", "Falha ao deletar o evento.");
    }
  }, []);

  const filtrarEventos = (termo: string) => {
    if (!termo.trim()) return eventos;

    const fuse = new Fuse(eventos, {
      keys: ["nome", "cidade", "bairro", "uf"],
      threshold: 0.4,
    });

    return fuse.search(termo).map(res => res.item);
  };

  const stats = useMemo(() => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const ativos = eventos.filter(e => new Date(e.data) >= hoje).length;
    
    return {
      total: eventos.length,
      ativos,
      cidades: new Set(eventos.map(e => e.cidade.toLowerCase().trim())).size
    };
  }, [eventos]);

  return {
    eventos,
    loading,
    stats,
    buscarEventos,
    deletarEvento,
    filtrarEventos,
  };
}