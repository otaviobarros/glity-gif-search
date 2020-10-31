import { IGif } from '@giphy/js-types'
import { FavoriteContext } from '@/src/presentation/contexts'
import { usePersistedState } from '@/src/presentation/hooks'

const FavoriteProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = usePersistedState<IGif[]>(
    'glity-favorite-gifs',
    []
  )

  const addFavorite = (gif: IGif): void => {
    setFavorites([...favorites, gif])
  }

  const removeFavorite = (id: string): void => {
    const newFavorites = favorites.filter(favorite => favorite.id !== id)
    setFavorites(newFavorites)
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider
