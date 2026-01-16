export interface Evento {
  id?: number;
  nome: string;
  data: string; 
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  imagem: string; 
}

export interface EventModalContextData {
  isModalOpen: boolean;
  editingEvent: Evento | null;
  openModal: (event?: Evento | null) => void;
  closeModal: () => void;
}