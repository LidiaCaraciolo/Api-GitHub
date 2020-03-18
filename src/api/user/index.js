import BaseRouter from '../../shared/base/router'
import UserController from './user.ctrl'

class UserRouter extends BaseRouter {
  constructor() {
    super()
    this.controller = UserController
  }

  initialize() {
    this.get('/', UserController.index)
    this.post('/', UserController.store)
  }
}

export default new UserRouter().getRouter()
