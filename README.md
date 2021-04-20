# STICKERS API

Uma simples API de Stickers utilizando [Express](https://github.com/expressjs/express), [Postgres](https://github.com/postgres/postgres), [Knex](https://github.com/knex/knex) e testes com [Mocha](https://github.com/mochajs/mocha), [Chai](https://github.com/chaijs/chai) e [Supertest](https://github.com/visionmedia/supertest).

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

## Ações disponiveis

Lista de stickers

```bash
curl -X GET \
  http://localhost:3000/api/v1/stickers \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 6125873e-578b-21f2-8418-d468bc9f9876'
```

Cria um novo registro

```bash
curl -X POST \
  http://localhost:3000/api/v1/stickers/ \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 34e93d55-0b27-608d-e90c-8d39f0da5666' \
  -d '  {
    "title": "node",
    "description": "node.js logo",
    "rating": 7,
    "url": "https://devstickers.com/assets/img/pro/71fi.png"
  }'
```

Atualiza um registro
```bash
curl -X PUT \
  http://localhost:3000/api/v1/stickers/10 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 30aaf532-d723-c0a6-60ec-260ed9a58715' \
  -d '{
	"title": "node",
	"description": "node.js logo",
	"rating": 9,
	"url": "https://devstickers.com/assets/img/pro/71fi.png"
}'
```

Deleta um registro
```bash
curl -X DELETE \
  http://localhost:3000/api/v1/stickers/10 \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 4f33b999-9f32-dd01-900a-a3be5a3f6c63'
```