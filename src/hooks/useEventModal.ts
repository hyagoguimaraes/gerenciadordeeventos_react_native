import { useContext } from 'react';
import { EventModalContext } from '../context/EventModalContext';

export function useEventModal() {
  const context = useContext(EventModalContext);
  if (!context) {
    throw new Error('useEventModal deve ser usado dentro de um EventModalProvider');
  }

  return context;
}