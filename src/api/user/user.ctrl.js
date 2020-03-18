import BaseResponse from '../../shared/base/response'
import { User } from '../../shared/models'

class UserController extends BaseResponse {
  constructor() {
    super()
    this.user = User
  }

  async index(req, res, next) {
    let params = {
      messages: 'OK!',
      status: 201,
    }
    try {
      this.sendResponse(res, next, params)
    } catch (error) {}
  }

  store(req, res, next) {
    const { body } = req
    const params = {
      messages: 'OK!',
      data: body,
      status: 201,
    }
    this.sendResponse(res, next, params)
  }
}

export default new UserController()
