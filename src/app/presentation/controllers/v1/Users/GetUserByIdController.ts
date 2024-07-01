import { Controller } from "../../../protocolos/controller";
import { HttpRequest, HttpResponse } from "../../../protocolos/http";
import { UsersService } from "../../../../services/user.service";
import { errorInternalServer, errorNotFound, successRequest } from "../../../helpers/http-helpers";

export const routeInfo = {
    path: '/users/:id',
    method: 'get',
    name: 'get user by id',
    controller: 'GetUserByIdController.ts',
    description: 'pegar um usuário pelo id',
    auth: false
}

export class GetUserByIdController implements Controller{
    private readonly userService: UsersService
    constructor() {
        this.userService = new UsersService()
    }

    async handle (httpRequest: HttpRequest): Promise<HttpResponse>{
        try{
            const { id } = httpRequest.params

            const data = await this.userService.find({
                where: {
                    id: id
                }
            })

            if (data.length === 0){
                return errorNotFound()
            } else {
                return successRequest(data)
            }
        } catch (error) {
            return errorInternalServer(error)
        }
    }
}