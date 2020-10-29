import { IGif } from '@giphy/js-types'

export type GifTrendingResult = {
  gifs: IGif[]
  pagination: {
    offset: number
  }
}
