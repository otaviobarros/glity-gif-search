import { GetServerSideProps, NextPage } from 'next'
import { Content, Header } from '@/src/presentation/components'
import { GifTrendingResult } from '@/src/presentation/lib/types'
import { GifsResult } from '@giphy/js-fetch-api'
import { SearchContextManager } from '@giphy/react-components'
import { makeClientFetchTrendingGifs } from '../main/factories/usecases/client'
import { makeApiFetchTrendingGifs } from '../main/factories/usecases/api'

type Props = GifTrendingResult & {
  giphyKey: string
  gitTrendingFetcher: (offset: number) => Promise<GifsResult>
}

const Home: NextPage<Props> = ({ giphyKey, gifs }) => {
  return (
    <>
      <SearchContextManager apiKey={giphyKey}>
        <Header />
        <Content gifs={gifs} gitTrendingFetcher={makeClientFetchTrendingGifs} />
      </SearchContextManager>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await makeApiFetchTrendingGifs(0)
  const giphyKey = process.env.GIPHY_API_KEY
  return {
    props: {
      giphyKey,
      gifs: data
    }
  }
}

export default Home
