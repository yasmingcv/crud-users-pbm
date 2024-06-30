import { UsersService } from "../../../../services/user.service";
import { Controller } from "../../../protocolos/controller";
import { HttpRequest, HttpResponse } from "../../../protocolos/http";
import { created } from "src/app/presentation/helpers/http-helpers";

export const routeInfo = {
    path: '/users/',
    method: 'post',
    name: 'post users',
    controller: 'GetAllUsersController.ts',
    description: 'criar um novo usuário',
    auth: false
}

export class AddUsersController implements Controller {
    private readonly usersService: UsersService

    constructor() {
        this.usersService = new UsersService()
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        try {
            const data = httpRequest.body
            
            const result = this.usersService.create(data)
            return {
                "statusCode": 201,
                "body": result
            }
        } catch (error) {
            return {
                "statusCode": 500,
                "body": error
            }
        }
    }
}