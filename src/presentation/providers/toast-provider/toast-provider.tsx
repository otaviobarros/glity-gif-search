import { useCallback, useState } from 'react'
import { v4 } from 'uuid'
import { ToastCointainer } from '@/src/presentation/components'
import { ToastContext } from '@/src/presentation/contexts'

export interface ToastProps {
  id: string
  text: string
  type?: 'success' | 'error' | 'info'
  test?: string
}

const ToastProvider: React.FC = (
  props: React.PropsWithChildren<React.ReactNode>
) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  const addToast = useCallback((text, type, test) => {
    const id = v4()
    const toast = {
      id,
      text,
      type,
      test
    }
    setToasts(state => [...state, toast])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(state => state.filter(toast => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {props.children}
      <ToastCointainer toasts={toasts} />
    </ToastContext.Provider>
  )
}

export default ToastProvider
