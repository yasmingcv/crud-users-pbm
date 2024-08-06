import 'reflect-metadata';
import { app } from './config/app';
import { TypeOrmHelpers } from './config/db-connection';
import fluentLogger from 'fluent-logger';

export const logger = fluentLogger

logger.configure('users', {
  host: 'localhost',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 60000
})

// Exemplo de log
logger.emit('mano sei lá', { from: 'userA', to: 'userB' });


void TypeOrmHelpers.connect().then(async => {
    console.log('Conectado ao banco de dados com sucesso.');
    app.listen(8080, () => {
        console.log('Servidor aguardando requisições na porta 8080.');
        
    })
}).catch((error) => {
    console.log(error)
})