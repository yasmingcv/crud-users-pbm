import "reflect-metadata"
import { DataSource } from "typeorm"
import User from "../../app/domain/entities/user";
import * as dotenv from 'dotenv';

dotenv.config()

const connect = async (): Promise<DataSource> => {
    return new DataSource({
        type: "mysql",
        host: process.env.HOSTNAME,
        port: 3306,
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: "users",
        synchronize: true,
        logging: false,
        entities: [User],
        migrations: [],
        subscribers: [],
    })
}

export const TypeOrmHelpers = {
    client: null as unknown as DataSource,
    connect: async (): Promise<void> => {
        TypeOrmHelpers.client = await connect()

        await TypeOrmHelpers.client.initialize()
    },
    disconnect: async (): Promise<void> => {
        await TypeOrmHelpers.client.close()
    }
}
