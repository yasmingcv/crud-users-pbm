import { errorInternalServer, successRequest } from "../../../helpers/http-helpers";
import { UsersService } from "../../../../services/user.service";
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
    private readonly usersService: UsersService
    constructor(){
        this.usersService = new UsersService()
    }

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try{
            const result = await this.usersService.findAll()
            console.log(result);
            
            return successRequest(result)

        } catch (error) {
            return errorInternalServer(error)

        }
        
    }
}