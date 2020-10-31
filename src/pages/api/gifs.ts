import { makeApiFetchTrendingGifs } from '@/src/main/factories/usecases/api'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { offset = 0 } = req.query
  const gifResponse = await makeApiFetchTrendingGifs(+offset)

  return res.status(200).json(gifResponse)
}
