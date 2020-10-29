import { createContext } from 'react'
import { IGif } from '@giphy/js-types'

export type FavoriteContextProps = {
  favorites: IGif[]
  addFavorite: (gif: IGif) => void
  removeFavorite: (id: string) => void
}

export default createContext<FavoriteContextProps>(null)
