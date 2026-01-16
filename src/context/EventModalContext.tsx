import React, { createContext, useState } from "react";
import { Evento } from "../@types/event";
import { EventModal } from "../components/EventModal"; 
import { useEvents } from "../hooks/useEvents";

export const EventModalContext = createContext({} as any);

export const EventModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Evento | null>(null);
  const { buscarEventos } = useEvents();

  const openModal = (evento?: Evento) => {
    setEditingEvent(evento || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingEvent(null);
  };

  return (
    <EventModalContext.Provider value={{ isModalOpen, openModal, closeModal, editingEvent }}>
      {children}
      <EventModal onSaveSuccess={() => buscarEventos()} />
    </EventModalContext.Provider>
  );
};