import { useEffect, useState } from 'react'
import { Grid } from '@giphy/react-components'
import ResizeObserver from 'react-resize-observer'
import { useFavorite } from '@/src/presentation/hooks'
import { FavoriteGifOverlay } from '..'
import { useTheme } from 'styled-components'
import { getBreakpoint } from '../../lib/helpers/get-breakpoint'
import { handleGifGridColumnsBreakpoints } from '../../lib/helpers'

const FavoriteListGrid: React.FC = () => {
  const { favorites } = useFavorite()
  const { breakpoints } = useTheme()
  const [columns, setColumns] = useState(3)

  const [width, setWidth] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
    }
  }, [])

  const handleBreakpoints = (): void =>
    getBreakpoint(width, breakpoints, currentBreakpoint =>
      setColumns(handleGifGridColumnsBreakpoints(currentBreakpoint))
    )

  return (
    <>
      <Grid
        fetchGifs={null}
        useTransform
        initialGifs={favorites}
        width={width}
        columns={columns}
        gutter={1}
        noLink
        overlay={FavoriteGifOverlay}
      />
      <ResizeObserver
        onResize={({ width }) => {
          handleBreakpoints()
          setWidth(width)
        }}
      />
    </>
  )
}

export default FavoriteListGrid
