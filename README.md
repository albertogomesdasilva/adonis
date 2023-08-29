npm init adonis-ts-app test

npx create-adonis-ts-app backend


npm init adonis-ts-app@latest backend

cd backend                                 
node ace serve --watch                     
                                                 

                                                 
    Server address: http://127.0.0.1:3333        
    Watching filesystem for changes: YES         

node ace make:controller Post

Descrição
Download MySQL
https://dev.mysql.com/downloads/mysql/

Docker
https://www.docker.com/

Docker Compose
https://docs.docker.com/compose/install/

Clientes para PostgreSQL
Postico
https://eggerapps.at/postico/

Postbird
https://www.electronjs.org/apps/postbird

Clientes para MySQL
Sequel Pro
http://sequelpro.com/

MySQL Workbench
https://dev.mysql.com/downloads/workbench/

Cliente universal
DBeaver
https://dbeaver.io/download/

Comando de criação rápida de banco MySQL no Docker

docker run -p 3306:3306 --name bootcamp_adonis -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=adonis -d mysql --default-authentication-plugin=mysql_native_password
docker-compose.yml

version: '3.9'

services:
  database:
    image: mysql
    platform: linux/x86_64
    container_name: bootcamp_cataline
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 'secret'
      MYSQL_DATABASE: 'adonis'
    ports:
      - '3306:3306'
Comando para alterar método de autenticação do MySQL para torna-lo compatível com Drive MySQL do Node.

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'secret';

flush privileges;
README.md

# backend

## Build Setup

Install [Docker Compose](https://docs.docker.com/compose/install/).

```bash
# Create container with MySQL
$ docker-compose up -d

# Create database structure
$ node ace migration:run

# install dependencies
$ npm install

# server with changes watcher
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```´
### INSTALAR E CONFIGURAR O PACOTE OFICIAL DO ADONIS - ORM DO ADONIS 
npm i @adonisjs/lucid@alpha  

node ace invoke @adonisjs/lucid


Instruções de configuração para @adonisjs/lucid
O pacote foi configurado com sucesso. A configuração do banco de dados armazenada no config/database.tsarquivo depende das seguintes variáveis ​​de ambiente e, portanto, recomendamos validá-las.

Abra o env.ts arquivo e cole o seguinte código dentro do Env.rulesobjeto.

Variáveis ​​para o driver MYSQL
MYSQL_HOST: Env.schema.string({ format: 'host' }),
MYSQL_PORT: Env.schema.number(),
MYSQL_USER: Env.schema.string(),
MYSQL_PASSWORD: Env.schema.string.optional(),
MYSQL_DB_NAME: Env.schema.string(),
O MYSQL_HOSTdeve estar sempre presente e formatado como um arquivo host.
O MYSQL_PORTdeve estar sempre presente e um número válido.
Os MYSQL_USERe MYSQL_PASSWORDsão necessários para autenticação no servidor de banco de dados. A senha está marcada como opcional, pois muitos servidores de banco de dados locais estão configurados para funcionar sem senhas.
Esse MYSQL_DB_NAMEé o nome do banco de dados ao qual você deseja se conectar.
Variáveis ​​para o driver PostgreSQL
PG_HOST: Env.schema.string({ format: 'host' }),
PG_PORT: Env.schema.number(),
PG_USER: Env.schema.string(),
PG_PASSWORD: Env.schema.string.optional(),
PG_DB_NAME: Env.schema.string(),
Variáveis ​​para o driver MSSQL
MSSQL_SERVER: Env.schema.string({ format: 'host' }),
MSSQL_PORT: Env.schema.number(),
MSSQL_USER: Env.schema.string(),
MSSQL_PASSWORD: Env.schema.string.optional(),
MSSQL_DB_NAME: Env.schema.string(),
Variáveis ​​para o driver OracleDB
ORACLE_HOST: Env.schema.string({ format: 'host' }),
ORACLE_PORT: Env.schema.number(),
ORACLE_USER: Env.schema.string(),
ORACLE_PASSWORD: Env.schema.string.optional(),
ORACLE_DB_NAME: Env.schema.string(),

$ node ace make:migration posts 

$ node ace migration:run

$ node ace migration:rollback -> desfaz a última migration:run

$  node ace make:migration add_slug_column --table=posts

$ node ace make:migration del_slug_column --table=posts

$ node ace make:model Post

$ node ace make:controller Posts -r

node ace list:routes
PS C:\Users\alber\Desktop\PROJETO-API-ADONIS\backend> node ace list:routes
GET|HEAD     /uploads/* ───────────────────────────────────────────────────────────────── drive.local.serve › Closure
GET|HEAD     / ────────────────────────────────────────────────────────────────────────────────────────────── Closure
GET|HEAD     /posts ───────────────────────────────────────────────────────────── posts.index › PostsController.index
POST         /posts ───────────────────────────────────────────────────────────── posts.store › PostsController.store
GET|HEAD     /posts/:id ─────────────────────────────────────────────────────────── posts.show › PostsController.show
PUT|PATCH    /posts/:id ─────────────────────────────────────────────────────── posts.update › PostsController.update
DELETE       /posts/:id ───────────────────────────────────────────────────── posts.destroy › PostsController.destroy

Descrição
npm i @adonisjs/auth@alpha

node ace invoke @adonisjs/auth
Sobre JWT
http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/

http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/

https://www.youtube.com/watch?v=DPrhem174Ws

node ace make:seeder FirstUser

node ace db:seed

se o seed der erro rode: npm install phc-argon2

https://station.cataline.io/bootcamp/introducao-ao-adonis

Validando postagens
Validação de dados

 node ace make:validator Post

Descrição
Tipos de validação
https://preview.adonisjs.com/guides/validator/schema-types

Regras de validação
https://preview.adonisjs.com/guides/validator/rules


https://station.cataline.io/bootcamp/introducao-ao-adonis
Finalizando relacionamento
Relacionamento de dados  6:30 LOGAR, POSTAR PARA TRAZER OS DADOS DO AUTHOR

https://station.cataline.io/bootcamp/introducao-ao-adonis
Propriedades computadas - Serialização de dados


