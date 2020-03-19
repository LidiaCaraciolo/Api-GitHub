import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import BaseResponse from './shared/base/response'
import routes from './routes'
import './config/database'

class App extends BaseResponse {
  constructor() {
    super()
    this.express = express()
    this.middleware()
    this.routes()
  }

  middleware() {
    this.express.use(express.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(bodyParser.json({ limit: '2mb' }))
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header(
        'Access-Control-Allow-Headers',
        'X-Requested-With, Content-Type, Authorization'
      )
      res.header(
        'Access-Control-Allow-Methods',
        'GET,PUT,PATCH,POST,DELETE,OPTIONS'
      )
      next()
    })
    this.express.use(cors())
  }

  routes() {
    this.express.get('/health', (req, res) => {
      res.status(200).json({ server: 'server is working!' })
    })
    this.express.use(routes)
  }
}

export default new App().express
