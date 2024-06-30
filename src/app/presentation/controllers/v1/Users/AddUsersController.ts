import { UsersService, addUser } from "../../../../services/user.service";
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

            if (data.firstName && data.lastName && !isNaN(data.age)) {
                await this.usersService.create(data)
                const userInserted = await this.usersService.selectLastUser()
                return {
                    "statusCode": 201,
                    "body": {
                        "message": "Usuário criado com sucesso!",
                        "user": userInserted
                    }
                }
            } else {
                return {
                    "statusCode": 400,
                    "body": {
                        "message": "Todos os campos devem ser preenchidos corretamente."
                    }
                }
            }

        } catch (error) {
            return {
                "statusCode": 500,
                "body": error
            }
        }
    }
}