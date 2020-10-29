import { GiphyFetch } from '@giphy/js-fetch-api'

export const giphyFetcher = new GiphyFetch(process.env.GIPHY_API_KEY)
