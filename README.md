# Crud Users

CRUD de usuários feito para praticar TypeScript com Node.JS

## Tecnologias Utilizadas:
- TypeScript
- TypeORM
- Express
- MySQL
- Node.JS

## Iniciando a Aplicação

1. Clone o repositório:
    ```bash
    git clone https://github.com/yasmingcv/crud-users-pbm.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd crud-users-pbm
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Crie o banco de dados localmente utilizando MySQL:
    ```sql
    create database users;
    ```
5. Crie o arquivo `.env` e preencha as credenciais:
    ```
    HOST=seu-host
    USER=seu-user
    PASSWORD=sua-senha
    ```
6. Rode o projeto:
    ```bash
    npm run dev:server
    ```

## Rotas

A rota padrão é `http://localhost:8080/api/v1`

- **GET** `/users/`: retorna todos os usuários cadastrados no sistema.
- **GET** `/users/{id}`: filtra os usuários, buscando pelo ID.
- **POST** `/users/`: cria um novo usuário, enviando pelo body os atributos: `firstName`, `lastName` e `age`.
- **PUT** `/users/{id}`: atualiza informações de um usuário pelo ID.
- **DELETE** `/users/{id}`: apaga um usuário pelo ID.
