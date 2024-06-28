import { BaseRepository } from "./base-repository";

export default class UsersRepository extends BaseRepository{
    constructor () {
        super('user') // model
    }
}