import { GifsResult } from '@giphy/js-fetch-api'

import { makeApiUrl } from '@/src/main/factories/http'

export const makeClientFetchTrendingGifs = (
  offset: number
): Promise<GifsResult> => {
  const fetcher = (): Promise<GifsResult> =>
    fetch(makeApiUrl(`/gifs?offset=${offset}`)).then(response =>
      response.json()
    )

  return fetcher()
}
