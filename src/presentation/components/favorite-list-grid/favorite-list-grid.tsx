import { useEffect, useState } from 'react'
import { Grid } from '@giphy/react-components'
import ResizeObserver from 'react-resize-observer'
import { useFavorite } from '@/src/presentation/hooks'
import { FavoriteGifOverlay } from '..'

const FavoriteListGrid: React.FC = () => {
  const { favorites } = useFavorite()

  const [width, setWidth] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
    }
  }, [])

  return (
    <>
      <Grid
        fetchGifs={null}
        onGifsFetchError={props => console.log(props)}
        onGifsFetched={props => console.log(props)}
        useTransform
        initialGifs={favorites}
        width={width}
        columns={3}
        gutter={1}
        noLink
        overlay={FavoriteGifOverlay}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width)
        }}
      />
    </>
  )
}

export default FavoriteListGrid
