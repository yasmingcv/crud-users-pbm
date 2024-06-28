import { UserModel } from "../domain/model/user.model";
import { FindProps } from "../infra/interfaces/find-props.interface";
import UsersRepository from "../infra/repositories/user-repository";

export class UsersService {
    private readonly UsersRepository: UsersRepository
    constructor() {
        this.UsersRepository = new UsersRepository()
    }

    async find(props: FindProps): Promise<UserModel[]> {
        return await this.UsersRepository.find(props);
    }


    async findAll(): Promise<UserModel[]> {
        const usersData = await this.find({relations: []})
        return usersData
    }
}