import { errorInternalServer, errorMissingParams, errorNotFound, successRequest } from "../../../helpers/http-helpers";
import { Controller } from "../../../protocolos/controller";
import { HttpRequest, HttpResponse } from "../../../protocolos/http";
import { UsersService } from "../../../../services/user.service";

export const routeInfo = {
    path: '/users/:id',
    method: 'delete',
    name: 'delete users',
    controller: 'DeleteUsersController.ts',
    description: 'apagar usuário',
    auth: false
}

export class DeleteUsersController implements Controller {
    private readonly usersService: UsersService

    constructor() {
        this.usersService = new UsersService()
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params

            const user = await this.usersService.find({
                where: { id: id }
            })

            if (user.length === 0) {
                return errorNotFound()
            } else {
                if (!isNaN(id)) {
                    await this.usersService.delete(id)

                    return successRequest()
                } else {
                    return errorMissingParams()
                }
            }

        } catch (error) {
            return errorInternalServer(error)
        }

    }
}