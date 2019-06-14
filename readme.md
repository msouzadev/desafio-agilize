# Repositório com o desafio do processo seletivo PHP Full Stack

Escolhi os desafios de criar um SPA e a função maxArray

Para executar o maxArray, no seu terminal digite:

```bash
php maxArray.php
```

## SPA

### Tecnologias utilizadas

Backend:

- Laravel
- Mysql

Front-End:

- ReactJs

#Instalação

após clonar o projeto, abrir o spa/backend pelo terminal e executar os seguintes comandos:

`cp .env.example .env`

## Configurar ambiente

arquivo .env

```APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:t77Ajy+Rfw2NUT3huR26NmgSCgaSsGdr/wxYKs30FSQ=
APP_DEBUG=true
APP_URL=url da aplicação

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nome do banco
DB_USERNAME=usuario
DB_PASSWORD=senha

MIX_APP_URL="url da aplicação"
```

Após configurar ambiente, executar o comando abaixo para criar as tabelas no bando de dados

`php artisan migrate`

Executar o comando para criar o usuario para logar na aplicação
`php artisan db:seed`
Feito isso , basta apenas iniciar o servidor com o comando:

`php artisan serve`
