import styled from 'styled-components'
import { SearchBar } from '@giphy/react-components'

export const SearchBoxWrapper = styled.section`
  display: flex;
  flex: 1;
  margin-left: ${({ theme }) => theme.mixins.spacing(8)};
  position: relative;
  margin-right: ${({ theme }) => theme.mixins.spacing(2)};

  @media screen and (max-width: 680px) {
    margin-left: ${({ theme }) => theme.mixins.spacing(0)};
    margin-right: ${({ theme }) => theme.mixins.spacing(1)};
  }
`

export const StyledSearchBar = styled(SearchBar)`
  padding: ${({ theme }) =>
    `${theme.mixins.spacing(1)} ${theme.mixins.spacing(3)}`};
  height: 42px !important;
  border-radius: 24px;
  border: 0;
  outline: 0;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.palette.grey[200]} !important;
  transition: border 0.2s ease-out;
  position: relative;

  &:active {
    border: 2px solid ${({ theme }) => theme.palette.secondary.main} !important;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.palette.secondary.main} !important;
  }

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.palette.secondary.main} !important;
  }

  & div {
    width: 100px;
    height: 42px !important;
    position: absolute;
    top: -1px;
    right: -1px;
    height: 40px;
    margin: 0;
  }

  & div > div {
    border-radius: 0 25px 25px 0;
  }
`

export const SearchClearButton = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.palette.secondary.main};
  right: 110px;
  top: 10px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`
