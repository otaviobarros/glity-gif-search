import styled from 'styled-components'

export const NoOptionsText = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.mixins.spacing(2)};

  h3 {
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
  }
`
