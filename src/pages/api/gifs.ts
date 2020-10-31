import { cors } from '@/src/main/config/middlewares'
import { makeApiFetchTrendingGifs } from '@/src/main/factories/usecases/api'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await cors(req, res)

  const { offset = 0 } = req.query
  const gifResponse = await makeApiFetchTrendingGifs(+offset)

  res.status(200).json(gifResponse)
}
