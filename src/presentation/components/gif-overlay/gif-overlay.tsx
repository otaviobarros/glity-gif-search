import { GifOverlayProps } from '@giphy/react-components'
import { useFavorite, useToast } from '@/src/presentation/hooks'
import { useTheme } from 'styled-components'
import { CgLink } from 'react-icons/cg'
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti'
import { Avatar, ActionIcon } from '..'
import {
  AvatarContainer,
  GifOverlayActions,
  GifOverlayContent,
  GifOverlayWrapper
} from './gif-overlay-styles'

type Props = GifOverlayProps

const GifOverlay: React.FC<Props> = ({ gif, isHovered }) => {
  const { palette } = useTheme()
  const { addToast } = useToast()
  const { favorites, addFavorite, removeFavorite } = useFavorite()

  const exists = favorites.find(favorite => favorite.id === gif.id)
  const handleFavorite = (): void => {
    if (exists) {
      return removeFavorite(gif.id as string)
    }
    addFavorite(gif)
  }

  const handleCopyLink = (): void => {
    const success = document.execCommand('copy', false, gif.url)

    success && addToast('Link copiado com sucesso', 'success')
    console.log(success)
  }

  const handleFavoriteIcon = (): React.ReactNode =>
    exists ? (
      <ActionIcon
        icon={<TiHeartFullOutline size={24} />}
        handleClick={handleFavorite}
        color='#f25757'
      />
    ) : (
      <ActionIcon
        icon={<TiHeartOutline size={24} />}
        handleClick={handleFavorite}
        color='#f25757'
      />
    )

  return (
    isHovered && (
      <GifOverlayWrapper>
        <GifOverlayContent>
          <AvatarContainer>
            <Avatar url={gif.user?.avatar_url} />
            <span>{gif.username}</span>
          </AvatarContainer>
          <GifOverlayActions>
            {handleFavoriteIcon()}
            <ActionIcon
              icon={<CgLink size={24} />}
              handleClick={handleCopyLink}
              color={palette.grey[300]}
            />
          </GifOverlayActions>
        </GifOverlayContent>
      </GifOverlayWrapper>
    )
  )
}

export default GifOverlay
