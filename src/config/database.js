import 'dotenv/config'
import mongoose from 'mongoose'

const host = process.env.DB_HOST || 'mongodb://localhost'
const port = process.env.DB_PORT || 27017
const dbname = process.env.DB_NAME || 'nodeapi'

try {
  mongoose.connect(`${host}:${port}/${dbname}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    auto_reconnect: true,
  })
} catch (error) {
  console.log('ERROR DB: ', error)
}
