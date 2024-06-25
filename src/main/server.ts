import 'reflect-metadata';
import { AppDataSource } from './config/db-connection';
import * as express from 'express';
import * as cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

AppDataSource.initialize().then(async () => {
    console.log('Conectado ao banco de dados com sucesso.');
    app.listen(8080, () => {
        console.log('Servidor aguardando requisições na porta 8080.');
        
    })
})