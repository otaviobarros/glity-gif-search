import { useTransition } from 'react-spring'

import { Container } from './toast-container-styles'
import { Toast } from '@/src/presentation/components'
import { ToastTypes } from '../../lib/types'

type Props = {
  toasts: ToastTypes[]
}

const ToastContainer: React.FC<Props> = ({ toasts }: Props) => {
  const toastsWithTransitions = useTransition(toasts, message => message.id, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 }
  })
  return (
    <Container>
      {toastsWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} toast={item} style={props} />
      ))}
    </Container>
  )
}

export default ToastContainer
