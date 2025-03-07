import { create } from "zustand";

interface AuthState {
  userEmail: string;
  userId: string;
  login: (email: string, id: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  userEmail: "",
  userId: "",
  login: (email, id) => set({ userEmail: email, userId: id }),
  logout: () => set({ userEmail: "", userId: "" }),
}));
