import { useContext, useEffect, useState } from 'react'
import ResizeObserver from 'react-resize-observer'
import { Grid, SearchContext } from '@giphy/react-components'
import { GifsResult } from '@giphy/js-fetch-api'
import { IGif } from '@giphy/js-types'
import { GifOverlay } from '..'
import { useTheme } from 'styled-components'

type Props = {
  gifs: IGif[]
  gitTrendingFetcher: (offset: number) => Promise<GifsResult>
}

const COLUMNS_BREAKPOINTS = {
  lg: 4,
  md: 3,
  sm: 2,
  xs: 1
}

const Content: React.FC<Props> = ({ gifs, gitTrendingFetcher }) => {
  const [width, setWidth] = useState(null)
  const { fetchGifs, term, channelSearch, activeChannel } = useContext(
    SearchContext
  )

  const { breakpoints } = useTheme()
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
    }
  }, [])

  const handleColumns = (currentBreakpoint: string): void =>
    setColumns(COLUMNS_BREAKPOINTS[currentBreakpoint])

  const handleBreakpoints = (): void => {
    const availableBreakpoints = breakpoints.keys.filter(key => {
      if (width >= breakpoints.values[breakpoints.keys.length - 1]) {
        return breakpoints.values[breakpoints.keys.length - 1]
      }

      return breakpoints.values[key] <= width
    })
    const currentBreakpoint =
      availableBreakpoints[availableBreakpoints.length - 1]

    handleColumns(currentBreakpoint)
  }

  if (!width) return null

  return (
    <>
      {term.length > 0 ? (
        <Grid
          key={`${channelSearch} ${term} ${activeChannel?.user.username}`}
          fetchGifs={fetchGifs}
          width={width}
          columns={columns}
          gutter={0}
          noLink
          overlay={GifOverlay}
        />
      ) : (
        <Grid
          fetchGifs={gitTrendingFetcher}
          initialGifs={gifs}
          width={width}
          columns={columns}
          gutter={0}
          noLink
          overlay={GifOverlay}
        />
      )}

      <ResizeObserver
        onResize={({ width }) => {
          handleBreakpoints()
          setWidth(width)
        }}
      />
    </>
  )
}

export default Content
