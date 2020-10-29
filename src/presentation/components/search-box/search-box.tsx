import { useContext } from 'react'
import { MdClear } from 'react-icons/md'
import { SearchContext } from '@giphy/react-components'
import {
  SearchBoxWrapper,
  SearchClearButton,
  StyledSearchBar
} from './search-box-styles'

const SearchBox: React.FC = () => {
  const { term, setSearch } = useContext(SearchContext)

  const handleClear = (): void => setSearch('')

  return (
    <SearchBoxWrapper>
      <StyledSearchBar placeholder='Busque todos os GIFs e Stickers' />
      {term && (
        <SearchClearButton onClick={handleClear}>
          <MdClear size={20} />
        </SearchClearButton>
      )}
    </SearchBoxWrapper>
  )
}

export default SearchBox
