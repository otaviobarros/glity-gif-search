import Cors from 'cors'
import { initMiddleware } from './init-middleware'

export const cors = initMiddleware(
  Cors({
    methods: ['GET'],
    origin: ['http://localhost:3000', 'https://glity-gif-search.vercel.app']
  })
)
