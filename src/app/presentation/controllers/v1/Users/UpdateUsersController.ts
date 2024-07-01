import { errorInternalServer, errorNotFound, successRequest } from "../../../helpers/http-helpers";
import { Controller } from "../../../protocolos/controller";
import { HttpRequest, HttpResponse } from "../../../protocolos/http";
import { UsersService } from "../../../../services/user.service";

export const routeInfo = {
    path: '/users/:id',
    method: 'put',
    name: 'update users',
    controller: 'UpdateUsersController.ts',
    description: 'atualizar um usuário existente',
    auth: false
}

export class UpdateUsersController implements Controller{
    private readonly usersService: UsersService
    constructor(){
        this.usersService = new UsersService()
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse>{
        try{
            const { id } = httpRequest.params
            const content = httpRequest.body

            const user = await this.usersService.find({
                where: {id: id}
            })

            if(user.length === 0){
                return errorNotFound()
            } else {
                await this.usersService.update(id, content)
                const userUpdated =  await this.usersService.find({
                    where: {id: id}
                })

                return successRequest(userUpdated[0])
                
            }
        } catch (error) {
            return errorInternalServer(error)
        }

    }   
}