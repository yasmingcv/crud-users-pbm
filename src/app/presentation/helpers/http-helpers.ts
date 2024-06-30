import { HttpResponse } from "../protocolos/http"

export const created = (data: any): HttpResponse => {
  return {
    statusCode: 201,
    body: data
  }
}

module.exports = created
