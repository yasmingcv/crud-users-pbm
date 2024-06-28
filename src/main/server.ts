import 'reflect-metadata';
import { app } from './config/app';
import { TypeOrmHelpers } from './config/db-connection';

void TypeOrmHelpers.connect().then(async => {
    console.log('Conectado ao banco de dados com sucesso.');
    app.listen(8080, () => {
        console.log('Servidor aguardando requisições na porta 8080.');
        
    })
}).catch((error) => {
    console.log(error)
})