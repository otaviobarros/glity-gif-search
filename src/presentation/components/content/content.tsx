import { useContext, useEffect, useState } from 'react'
import ResizeObserver from 'react-resize-observer'
import { Grid, SearchContext } from '@giphy/react-components'
import { GifsResult } from '@giphy/js-fetch-api'
import { useTheme } from 'styled-components'
import { IGif } from '@giphy/js-types'
import { handleGifGridColumnsBreakpoints } from '@/src/presentation/lib/helpers'
import { GifOverlay } from '..'
import { getBreakpoint } from '../../lib/helpers/get-breakpoint'

type Props = {
  gifs: IGif[]
  gitTrendingFetcher: (offset: number) => Promise<GifsResult>
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

  const handleBreakpoints = (): void =>
    getBreakpoint(width, breakpoints, currentBreakpoint =>
      setColumns(handleGifGridColumnsBreakpoints(currentBreakpoint))
    )

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
