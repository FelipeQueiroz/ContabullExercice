![ProjectImage](https://i.imgur.com/6UJfaxW.png)
# Authetication App 

> Authetication App with basic and secured login/register system made with: NESTJS, GRAPHQL, PRISMA, REACT, VITE.

### Features

- [x] Use prisma to interact with the database
- [x] Setup a GraphQL endpoint using the code-first approach.
- [x] Create a React __TypeScript__ application using ViteJS
- [x] Build a simple authentication system
- [x] Dark mode

## Getting Started

These instructions will get you a copy of the full project up and running on your local machine for development and testing purposes.

The project is built in yarn at frontend and npm for backend.

* **Npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/)

* **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general.  [Download Yarn](https://yarnpkg.com/en/docs/install)

## Setting up Databases and Services

```
1. cd infra
2. docker-compose up -d --build // to build
3. docker-compose up
```

## How to Install

### Backend (API)

* Install the dependencies and start the server:

```
1. cd api
2. npm install
3. npm run start:dev
```

Rename the file `.env.example` to `.env` and create yours environment variables and replace them. It's is very important for running the server.

### Frontend (React)

* Install the dependencies and start the project:

```
1. cd web
3. yarn
4. yarn dev
```

## License

This project could be used by anyone! MIT License
