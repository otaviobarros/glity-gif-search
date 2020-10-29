import styled from 'styled-components'
import { lighten } from 'polished'

interface Props {
  color: string
}

export const ActionIconWrapper = styled.div<Props>`
  cursor: pointer;
  color: ${({ color }) => color};

  &:hover {
    color: ${({ color }) => lighten(0.07, color)};
  }
`
