export interface User {
  id: number;
  nome: string; 
  email: string;
}

export interface LoginCredentials {
  email: string;
  senha?: string;
}

export interface RegisterData extends LoginCredentials {
  nome: string; 
}

export interface AuthResponse {
  token: string;
  id: number;
}

export interface AuthContextData {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  loading: boolean;
}