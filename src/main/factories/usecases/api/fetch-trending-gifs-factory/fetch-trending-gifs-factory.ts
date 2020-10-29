import { GifsResult } from '@giphy/js-fetch-api'
import { giphyFetcher } from '@/src/main/config'

export const makeApiFetchTrendingGifs = (offset: number): Promise<GifsResult> =>
  giphyFetcher.trending({ offset, limit: 10, type: 'gifs' })
