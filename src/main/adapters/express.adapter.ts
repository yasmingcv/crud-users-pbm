import { NextFunction, Request, Response } from "express"
import { HttpRequest, HttpResponse } from "../../app/presentation/protocolos/http"
import { Controller } from "../../app/presentation/protocolos/controller"

//função padrão pq todas as rotas são chamadas nesse formato
export const adaptRoute = (controller: Controller) => {
    return async (request: Request, response: Response, next: NextFunction): Promise<any> => {
        const httpRequest: HttpRequest = {
            body: request.body,
            query: request.query,
            params: request.params,
            headers: request.headers,
            //user: request.user,
            nextFunction: next
        }

        const httpResponse: HttpResponse = await controller.handle(httpRequest)

        console.log('adaptRoute',httpResponse);
        

        httpResponse.headers !== undefined ? response.set(httpResponse.headers) : null

        if (httpResponse.path !== undefined) {
            response.sendFile(httpResponse.path)
        } else {
            response.status(httpResponse.statusCode).json(httpResponse.body)
        }       
      
    }
}