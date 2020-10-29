export interface Toast {
  addToast: (text: string, type?: string, test?: string) => void
  removeToast: (id: string) => void
}
