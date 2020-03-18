import Messages from '../constants/http.response'
import HttpError from '../utils/http.error'

export default class BaseResponse {
  constructor() {
    this.messages = Messages
    this.HttpError = HttpError
  }

  sendResponse(res, next, { ...params }) {
    let response = {}
    let { messages, data, status, token } = params

    if (messages) response.messages = messages
    if (data) response.data = data
    if (token) response.token = token

    res.status(status || 200).json(response)
    next()
  }

  sendError(res, next, { ...params } = null) {
    let status = 401
    let response = {
      messages: this.messages.INTERNAL_SERVER_ERROR,
    }
    if (params) {
      let { messages, status: _status, error } = params
      if (messages) response.messages = messages
      if (error) response.error = error
      if (_status) status = _status
    }
    res.status(status).json(response)
    next()
  }
}
