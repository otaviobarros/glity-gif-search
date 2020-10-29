import React, { useCallback, useEffect } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi'
import { AnimatedValue } from 'react-spring'
import { Container } from './toast-styles'
import { useToast } from '@/src/presentation/hooks'
import { ToastTypes } from '../../lib/types'

interface Props {
  toast: ToastTypes
  style: AnimatedValue<object>
}

const icons = {
  info: <FiInfo size={20} />,
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />
}

const Toast: React.FC<Props> = ({ toast, style }: Props) => {
  const { removeToast } = useToast()
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id)
    }, 3000)

    return () => clearTimeout(timer)
  }, [toast.id, removeToast])

  const handleRemoveToast = useCallback(() => {
    removeToast(toast.id)
  }, [removeToast])

  return (
    <Container type={toast.type} style={style} data-testid={toast.test}>
      <div className='icon'>{icons[toast.type] || icons.info}</div>
      <div className='text'>{toast.text}</div>
      <button type='button' onClick={handleRemoveToast}>
        <FiX size={16} />
      </button>
    </Container>
  )
}

export default Toast
