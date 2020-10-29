import { useContext } from 'react'
import { ToastContext } from '@/src/presentation/contexts'
import { Toast } from '../protocols/toast'

export const useToast = (): Toast => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}
