import { useState } from 'react'
import { CgHeart } from 'react-icons/cg'
import { ActionIcon, Dialog, FavoriteListGrid, Logo, SearchBox } from '..'
import {
  HeaderFavoriteIcon,
  HeaderSearchGroup,
  HeaderWrapper
} from './header-styles'

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = (): void => setOpen(true)

  const handleClose = (): void => setOpen(false)

  return (
    <>
      <Dialog title='Meus favoritos' open={open} handleClose={handleClose}>
        <FavoriteListGrid />
      </Dialog>
      <HeaderWrapper>
        <div className='header'>
          <Logo />
          <HeaderSearchGroup>
            <SearchBox />
            <HeaderFavoriteIcon>
              <ActionIcon
                icon={<CgHeart size={24} />}
                handleClick={handleOpen}
                color='#f25757'
              />
            </HeaderFavoriteIcon>
          </HeaderSearchGroup>
        </div>
      </HeaderWrapper>
    </>
  )
}

export default Header
