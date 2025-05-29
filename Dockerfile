# Use uma imagem base com Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas o package.json primeiro (para aproveitar cache do Docker)
COPY package.json ./

# Instala as dependências
RUN npm install

# Copia o resto dos arquivos do projeto
COPY . .

# Expõe a porta 8080 (padrão do http-server)
EXPOSE 8080

# Comando para iniciar o servidor usando npm script
CMD ["npm", "start"] 
