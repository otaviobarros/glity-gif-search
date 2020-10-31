import styled from 'styled-components'
import { isThemeDark } from '../../styles/themes/helpers'

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) =>
    isThemeDark() ? theme.palette.grey[900] : theme.palette.common.white};
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) =>
      `${theme.mixins.spacing(2)} ${theme.mixins.spacing(2)}`};
    margin: auto;

    @media screen and (max-width: 680px) {
      flex-direction: column;
    }
  }
`

export const HeaderSearchGroup = styled.section`
  width: 100%;
  align-items: center;
  display: flex;

  @media screen and (max-width: 680px) {
    margin-top: ${({ theme }) => theme.mixins.spacing(2)};
  }
`

export const HeaderFavoriteIcon = styled.span`
  margin-left: ${({ theme }) => theme.mixins.spacing(2)};
`
