import styled, { css } from 'styled-components'
import { animated } from 'react-spring'
import { ToastTypes } from '../../lib/types'

const toastTypeVariations = {
  info: css`
    background: #2196f3;
  `,
  error: css`
    background: #f44336;
  `,
  success: css`
    background: #4caf50;
  `
}

export const Container = styled(animated.div)<Pick<ToastTypes, 'type'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  margin: 8px;
  z-index: 2000;

  background: #2196f3;
  color: #ffffff;

  ${props => toastTypeVariations[props.type] || 'info'}

  .icon {
    margin-right: 16px;
  }

  .text {
    margin-right: 8px;
    p {
      font-size: 16px;
    }
  }

  button {
    padding: 4px;
    border-radius: 50%;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`
