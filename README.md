# My Boilerplate

There are many good boilerplate out there. This is my choices of tools as of today, glued into a single repository to help me get started on a new project. It will probably be outdated earlier than I hope, but lets give it a try anyway 🤷🏼‍♂️

## Tech stack

A simple list of things being used in this project.

* [Node](https://nodejs.org) with [Express](https://expressjs.com)
* [React](https://reactjs.org) with [Create React App](https://create-react-app.dev)
* [Sequelize](https://sequelize.org/) as ORM
* [PostgreSQL](https://www.postgresql.org/) (should be easy to switch though)

## Deploy

A Postgres DB is required and the environment variable `DB_CONNECTIONSTRING` need to be set. The database specified need to exists (dah).

With that requirement, to build and start your server in production mode:

```sh
npm start
```

## Install Depencies

All dependecies (including the separate ones in `./client/`) are installed using:

```sh
npm install
```

This will minimize and prepare your code for production. Build files will be located in `./client/build` and served using Express.

# Development

The client side of the code will use Hot Module Reload but the server part has to be restarted manually.

In order to start the app in dev mode (after completing Setup belog):

```sh
npm run dev
```

## Setup

You need a Postgres DB to connect to. Add your DB connection string to `.env` (in root):

```sh
DB_CONNECTIONSTRING=postgres://postgres:docker@localhost:5432/boilerplate
```

### Start a Postgres instance using Docker

If you have docker installed you can easily start one in deamonized mode using:

```sh
docker run --rm --name postgres-local -p 5553:5432 -e POSTGRES_PASSWORD=docker -v $HOME/.docker-data/postgres:/var/lib/postgresql/data -d postgres
```

Then create a database to be used:

```sh
docker exec -it postgres-local bash
su - postgres # change user to postgres
psql -U postgres
createdb boilerplate
\l # verify it is in the list
grant all privileges on database boilerplate to postgres; # grant access
```

You should now be able to connect to DB.

## Migrate Database

Migrations and seeds are being handled by Sequelize. To create a new migration:

```sh
npm run db:migration:new my-new-migration
```

For other possibilities, see [migration docs](https://sequelize.org/master/manual/migrations.html).

## Start app

The client is being built using [Create React App](https://create-react-app.dev). To start server and watching files+hot reload of client side code:

```sh
npm run dev # Start both server and Create React app. Should be enough in most cases.

# Optionally start separetly:
npm run server # Starts only server
npm run client # Starts only Create React App
```
