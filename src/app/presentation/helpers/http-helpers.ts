import { HttpResponse } from "../protocolos/http"

export const created = (data: any): HttpResponse => {
  return {
    statusCode: 201,
    body: {
      message: "Item criado com sucesso!",
      data
    }
  }
}

export const successRequest = (dataParam?: any): HttpResponse => {
  const data = dataParam ? dataParam : null
  
  return {
    statusCode: 200,
    body: {
      message: "Requisição bem-sucedida!",
      data
    }
  }
}

export const errorInternalServer = (error: any): HttpResponse => {
  return {
    statusCode: 500,
    body: {
      message: "Erro interno no servidor.",
      error
    }
  }
}

export const errorMissingParams = (): HttpResponse => {
  return {
    statusCode: 400,
    body: {
      message: "Todas as informações devem ser preenchidas corretamente."
    }
  }
}

export const errorNotFound = (): HttpResponse => {
  return {
    statusCode: 404,
    body: {
      message: "Nenhum item encontrado."
    }
  }
}
