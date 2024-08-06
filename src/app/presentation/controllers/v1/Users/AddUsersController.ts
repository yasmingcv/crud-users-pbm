import { UsersService, addUser } from "../../../../services/user.service";
import { Controller } from "../../../protocolos/controller";
import { HttpRequest, HttpResponse } from "../../../protocolos/http";
import { created, errorMissingParams } from "../../../helpers/http-helpers";
import { logger } from "../../../../../main/server";

export const routeInfo = {
    path: '/users/',
    method: 'post',
    name: 'post users',
    controller: 'AddUsersController.ts',
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

                logger.emit('juro nao sei', data)
                return created(userInserted[0])


            } else {
                return errorMissingParams()
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: error
            }
        }
    }
}