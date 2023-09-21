import { ToastIconNames } from "@components/dom/Toasts/icons";
import { create } from "zustand";

export type ToastStatus = "show" | "hide";

export type Toast = {
  content: {
    title: string;
    message: string;
    icon?: ToastIconNames;
  };
  // Time toast was emitted
  time: number;
  status: ToastStatus;
};

interface ToastState {
  toasts: Record<number, Toast>;
  addToast: (toast: Toast) => void;
  removeToast: (toastId: number) => void;
  updateToast: (toastId: number, data: Partial<Toast>) => void;
}

export const useToastStore = create<ToastState>()((set) => ({
  toasts: {},
  addToast: (toast) =>
    set((state) => ({ toasts: { ...state.toasts, [toast.time]: toast } })),
  removeToast: (toastId) =>
    set((state) => {
      const newToasts = { ...state.toasts };
      delete newToasts[toastId];
      return {
        ...state,
        toasts: newToasts,
      };
    }),
  updateToast: (toastId, data) =>
    set((state) => {
      state.toasts[toastId] = {
        ...state.toasts[toastId],
        ...data,
      };
      return state;
    }),
}));
