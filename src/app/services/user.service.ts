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
        const usersData = await this.find({ relations: [] })
        return usersData
    }

    async create(content: addUser): Promise<void> {
        const result = await this.UsersRepository.add(content)
        return result
    }

    async selectLastUser(): Promise<UserModel[]> {
        const user = await this.find({ 
            order: { id: "DESC" }, 
            take: 1 })
        return user

    }
}

export interface addUser {
    firstName: string,
    lastName: string,
    age: number
}