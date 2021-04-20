# STICKERS API

Uma simples API de Stickers utilizando [Express](https://github.com/expressjs/express), [Postgres](https://github.com/postgres/postgres), [Knex](https://github.com/knex/knex) e testes com [Mocha](https://github.com/mochajs/mocha), [Chai](https://github.com/chaijs/chai) e [Supertest(https://github.com/chaijs/chai).

## Instalação

```bash
git clone git@github.com:steniols/stickers-api.git
cd stickers-api
cd server
npm install
```

## Configurações do Banco de dados

É necessário ter o PostgreSQL instalado, além de editar o arquivo `/server/knexfile.js` com suas configurações do banco de dados.
Para este exemplo criei a tabela *stickers* com o comando:
```
createdb stickers
```
e criei esta role:
```
CREATE ROLE stickersuser WITH LOGIN PASSWORD '123456';
GRANT ALL PRIVILEGES ON DATABASE "stickers" TO stickersuser;
```

## Migrations e Seeds 

```bash
cd server
npx knex migrate:latest
npx knex seed:run
```


## Testes

```bash
cd server
npm run test
```

## Iniciando o servidor

```bash
cd server
npm run dev
```

## URLs disponiveis
Lista de stickers:
```
http://localhost:3000/api/v1/stickers
```
