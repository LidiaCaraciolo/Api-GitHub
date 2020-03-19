import BaseResponse from '../../shared/base/response'
import { User } from '../../shared/models'

class UserController extends BaseResponse {
  constructor() {
    super()
    this.User = User
  }

  async index(req, res, next) {
    try {
      const data = await this.User.find()
      this.sendResponse(res, next, { status: 201, data })
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }

  async store(req, res, next) {
    try {
      const { usename, email, nickname, password } = req.body
      if (usename && email && nickname && password) {
        const data = await this.User.create({
          usename,
          email,
          nickname,
          password,
        })
        this.sendResponse(res, next, { status: 201, data })
      } else {
        this.sendError(res, next, {
          status: 402,
          messages: 'Error params on body',
        })
      }
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }

  async updateUserName(req, res, next) {
    try {
      const { id, usename } = req.body
      if (id && usename) {
        const data = await this.User.updateOne(
          { _id: id },
          { $set: { usename } }
        )
        this.sendResponse(res, next, { status: 201, data })
      } else {
        this.sendError(res, next, {
          status: 402,
          messages: 'Error params on body',
        })
      }
    } catch (error) {
      this.sendError(res, next, { status: 403, messages: error.message })
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.body
      if (id) {
        const data = await this.User.remove({ _id: id })
        this.sendResponse(res, next, { status: 201, data })
      } else {
        this.sendError(res, next, {
          status: 402,
          messages: 'Error params on body',
        })
      }
    } catch (error) {
      this.sendError(res, next, { status: 403, messages: error.message })
    }
  }
}

export default new UserController()
