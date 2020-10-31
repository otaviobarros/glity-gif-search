import styled from 'styled-components'

interface Props {
  width: number
}

export const AvatarWrapper = styled.div<Props>`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;

  & img {
    border-radius: 50%;
  }
`
