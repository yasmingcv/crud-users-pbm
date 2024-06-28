import { Repository } from "typeorm"
import { TypeOrmHelpers } from "../../../main/config/db-connection"
import { type FindProps } from "../interfaces/find-props.interface"

export class BaseRepository {
    private readonly model: string
    private readonly plugin?: string

    constructor(model: string, plugin?: string) {
        this.model = model
        this.plugin = plugin
    }

    //faz uma instancia do repositorio 
    async instanceRepository(): Promise<Repository<any>> {
        const model = (await import(`../../domain/entities/${this.model}.ts`)).default

        const repository = TypeOrmHelpers.client.getRepository(model)
        
        return repository
    }

    async add(content: any): Promise<any> {
        const repository = await this.instanceRepository()
        return await repository.save(content)
    }

    async delete(content: any): Promise<void> {
        const repository = await this.instanceRepository()
        await repository.delete(content)
    }

    async find(props: FindProps): Promise<any[]> {
        const repository = await this.instanceRepository()
        return await repository.find(props)
    }


}