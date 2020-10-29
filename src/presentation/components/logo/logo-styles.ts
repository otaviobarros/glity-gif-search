import styled from 'styled-components'
import { isThemeDark } from '../../styles/themes/helpers'

export const LogoWrapper = styled.section`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const LogoName = styled.span`
  margin-left: ${({ theme }) => theme.mixins.spacing(1)};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  color: ${({ theme }) =>
    isThemeDark() ? theme.palette.common.white : theme.palette.secondary.main};
`
