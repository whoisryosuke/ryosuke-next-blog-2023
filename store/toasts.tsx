import { create } from 'zustand'

export type ToastStatus = 'show' | 'hide'

export type Toast = {
    content: {
        title: string;
        message: string;
        icon?: string;
    }
    // Time toast was emitted
    time: number;
    status: ToastStatus;
}

interface ToastState {
    toasts: Toast[]
    addToast: (toast: Toast) => void
    removeToast: (toastId: number) => void
    updateToast: (toastId: number, data: Partial<Toast>) => void
}

export const useToastStore = create<ToastState>()((set) => ({
    toasts: [],
    addToast: (toast) => set((state) => ({ toasts: [ ...state.toasts, toast ] })),
    removeToast: (toastId) => set((state) => ({ toasts: state.toasts.filter((_, index) => index !== toastId) })),
    updateToast: (toastId, data) => set((state) => {
        state.toasts[toastId] = {
            ...state.toasts[toastId],
            ...data,
        }
        return state
    }),
}))