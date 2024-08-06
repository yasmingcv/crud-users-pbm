# Use a imagem oficial do Node.js como base
FROM node:19.8.1

# Defina o diretório de trabalho no contêiner
WORKDIR /src

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código do projeto
COPY . .

# Exponha a porta que o aplicativo vai usar
EXPOSE 8080

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
