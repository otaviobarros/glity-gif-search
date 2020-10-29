import { useContext } from 'react'
import { FavoriteContext } from '../contexts'
import { FavoriteContextProps } from '../contexts/favorites-context'

export const useFavorite = (): FavoriteContextProps => {
  const favoriteContext = useContext(FavoriteContext)

  if (!favoriteContext) {
    throw new Error('useFavorite must be used within a FavoriteContext')
  }

  return favoriteContext
}
