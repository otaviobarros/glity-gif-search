import React from 'react'
import { ActionIconWrapper } from './action-icon-styles'

interface Props {
  icon: React.ReactNode
  color?: string
  handleClick: () => void
}

const ActionIcon: React.FC<Props> = ({
  icon,
  color = '#ffffff',
  handleClick
}) => {
  return (
    <ActionIconWrapper color={color} onClick={handleClick}>
      {icon}
    </ActionIconWrapper>
  )
}

export default ActionIcon
