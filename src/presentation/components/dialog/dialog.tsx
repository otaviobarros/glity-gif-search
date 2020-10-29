import { VscClose } from 'react-icons/vsc'
import 'rc-dialog/assets/index.css'
import { maskStyle, StyledDialog } from './dialog-styles'

type Props = {
  title: string
  open: boolean
  handleClose: () => void
}

const wrapClassName = 'center'

const Dialog: React.FC<Props> = ({ title, open, handleClose, children }) => {
  return (
    <StyledDialog
      style={{
        zIndex: 1100,
        position: 'relative'
      }}
      maskStyle={maskStyle}
      visible={open}
      closable
      wrapClassName={wrapClassName}
      animation='zoom'
      maskAnimation='fade'
      onClose={handleClose}
      closeIcon={<VscClose />}
      title={title}
      destroyOnClose
    >
      {children}
    </StyledDialog>
  )
}

export default Dialog
