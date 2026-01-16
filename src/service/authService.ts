import api from "./api";
import { LoginCredentials, AuthResponse, RegisterData } from "../@types/auth";

const authService = {
  login: async (data: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/auth/login", data);
    return response.data;
  },

  register: async (data: RegisterData): Promise<void> => {
    await api.post("/auth/register", data);
  },
}

export default authService;