import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../../app/domain/entities/User"
import * as dotenv from 'dotenv'; 

dotenv.config()

export const AppDataSource = new DataSource({
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
