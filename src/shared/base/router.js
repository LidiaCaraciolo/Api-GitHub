import { Router } from 'express'

import { asyncMiddleware } from '../middlewares/async.middleware'

export default class BaseRouter {
  constructor() {
    this.router = Router({ mergeParams: true })
  }

  get(path, fn, ...middlewares) {
    this.router.get(
      path,
      middlewares,
      asyncMiddleware(fn.bind(this.controller))
    )
  }

  post(path, fn, ...middlewares) {
    this.router.post(
      path,
      middlewares,
      asyncMiddleware(fn.bind(this.controller))
    )
  }

  put(path, fn, ...middlewares) {
    this.router.put(
      path,
      middlewares,
      asyncMiddleware(fn.bind(this.controller))
    )
  }

  delete(path, fn, ...middlewares) {
    this.router.delete(
      path,
      middlewares,
      asyncMiddleware(fn.bind(this.controller))
    )
  }

  initialize() {}

  getRouter() {
    this.initialize()
    return this.router
  }
}
