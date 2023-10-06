import { create } from "zustand";

export type UserInputMap = {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  confirm: boolean;
  cancel: boolean;
};

export type UserInputKeys = keyof UserInputMap;

interface InputState {
  input: UserInputMap;
  setInput: (key: UserInputKeys, input: boolean) => void;
}

export const useInputStore = create<InputState>()((set) => ({
  input: {
    up: false,
    down: false,
    left: false,
    right: false,
    confirm: false,
    cancel: false,
  },
  setInput: (key, input) =>
    set((state) => ({ input: { ...state.input, [key]: input } })),
}));
