import { create } from "zustand";

interface TodoState {
  newTodo: string;
  createTodo: boolean;
  editTodo: boolean;

  setNewTodo: (content: string) => void;
  setCreateTodo: (state: boolean) => void;
  setEditTodo: (state: boolean) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  newTodo: "",
  createTodo: false,
  editTodo: false,

  setNewTodo: (content: string) => set({ newTodo: content }),
  setCreateTodo: (state: boolean) => set({ createTodo: state }),
  setEditTodo: (state: boolean) => set({ editTodo: state }),
}));
