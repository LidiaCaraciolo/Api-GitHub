import 'dotenv/config'

export const env = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
}
