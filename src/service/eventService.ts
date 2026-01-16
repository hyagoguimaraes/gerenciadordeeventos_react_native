import { AxiosResponse } from "axios";
import { Evento } from "../@types/event";
import api from "./api";

const eventService = {
  listar: (adminId: number): Promise<AxiosResponse<Evento[]>> => 
    api.get(`/eventos?adminId=${adminId}`),

  criar: (adminId: number, data: Evento): Promise<AxiosResponse<Evento>> => 
    api.post(`/eventos?adminId=${adminId}`, data),

  atualizar: (id: number, data: Evento): Promise<AxiosResponse<Evento>> => 
    api.put(`/eventos/${id}`, data),

  deletar: (id: number): Promise<AxiosResponse<void>> => 
    api.delete(`/eventos/${id}`),
}

export default eventService;