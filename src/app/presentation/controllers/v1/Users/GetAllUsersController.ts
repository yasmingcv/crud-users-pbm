import { Controller } from "../../../protocolos/controller";
import { HttpRequest, HttpResponse } from "../../../protocolos/http";

export const routeInfo = {
    path: '/users/',
    method: 'get',
    name: 'get users',
    controller: 'GetAllUsersController.ts',
    description: 'listar todos os usuários',
    auth: false
}

export class GetAllUsersController implements Controller{
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        return {
            "statusCode": 200,
            "body": 'caiu na contorlelre'
        }
    }
}