import dotenv from 'dotenv'

import app from './app'
import { env } from './config/app'

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })

app.listen(env.port, () =>
  console.log(`Server is running on port: ${env.port}`)
)
