# Projeto de Exemplo

Aplicação para gerenciar usuários utilizando Node.js, Express, MongoDB, React e Axios.

## Índice

1. [Instalação](#instalação)
2. [Configuração do Backend](#configuração-do-backend)
3. [Configuração do Frontend](#configuração-do-frontend)
4. [Como Usar](#como-usar)

## Instalação

1. Clone este repositório:
   
2. Instale as dependências do backend:
cd backend
npm install

3. Instale as dependências do frontend:
cd ../frontend
npm install


## Configuração do Backend

1. Configure o MongoDB:
- Instale o MongoDB e inicie o serviço.
- Crie um banco de dados e um usuário se necessário.

2. Configure as variáveis de ambiente:
- Crie um arquivo `.env` no diretório `backend`.
- Adicione a string de conexão do MongoDB e outras variáveis necessárias:
  ```
  PORT=5000
  MONGODB_CONNECTION_STRING=mongodb://localhost:27017/nome-do-banco-de-dados
  ```

## Configuração do Frontend

1. Configure a URL base da API:
- Verifique se a URL base da API em `services/api.js` aponta para o servidor backend correto:
  ```javascript
  const api = axios.create({
    baseURL: 'http://localhost:5000/api',
  });
  ```

## Como Usar

1. Inicie o servidor backend:
cd backend
node server.js

2. Inicie o servidor frontend em outro terminal:
cd frontend
npm start

3. Acesse a aplicação no seu navegador:
Abra http://localhost:3000 no seu navegador.
