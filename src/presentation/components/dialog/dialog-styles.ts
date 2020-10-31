import DialogComponent from 'rc-dialog'
import styled from 'styled-components'
import { lighten } from 'polished'
import { isThemeDark } from '../../styles/themes/helpers'

export const maskStyle = {
  backgroundColor: 'rgba(5, 5, 5, 0.5)'
}

export const StyledDialog = styled(DialogComponent)`
  width: 90%;
  z-index: 1100;
  overflow: hidden;

  .rc-dialog-close {
    cursor: pointer;
    border: 0;
    background: transparent;
    font-size: 21px;
    position: absolute;
    right: 6px;
    top: 6px;
    font-weight: 700;
    line-height: 1;
    opacity: 1;
    color: ${({ theme }) =>
      isThemeDark() ? theme.palette.common.white : theme.palette.primary.main};
    text-shadow: 0 1px 0 #fff;
    text-decoration: none;
    transition: color 0.2s ease;
    outline: 0;

    &:hover {
      color: ${({ theme }) =>
        isThemeDark()
          ? lighten(0.15, theme.palette.secondary.main)
          : lighten(0.1, theme.palette.secondary.main)};
    }
  }

  .rc-dialog-header {
    padding: ${({ theme }) => theme.mixins.spacing(2)};
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
    border-radius: 4px 4px 0 0;
    color: ${({ theme }) =>
      isThemeDark() ? theme.palette.common.white : theme.palette.common.black};
    background-color: ${({ theme }) =>
      isThemeDark() ? theme.palette.grey[900] : theme.palette.common.white};
  }

  .rc-dialog-title {
    font-size: 1.125rem;
    font-weight: 500;
  }

  .rc-dialog-body {
    border-radius: 0 0 4px 4px;
    padding: 0;
    background-color: ${({ theme }) => {
      return isThemeDark()
        ? theme.palette.grey[800]
        : theme.palette.common.white
    }};
  }

  .giphy-grid {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
