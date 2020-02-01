---
id: backend-structure
title: Structure
---

The backend is written in TypeScript and runs **GraphQL server that talks to neo4j database**.

In the setup stage, the backend takes a `.csv` file(s) and mapping each data row to an edge connecting two nodes.
After setup and build, the system allows the user to query the dataset through GraphQL queries.

## Libraries

- `apollo-server-express`: Runs the GraphQL server, `http` server, parsing responses to GraphQL queries, validates inputs against GraphQL schema, etc'.

- `compression`: Returns GZIP compressed responses to client.

- `cors`: Defines cors policy.

- `csvtojson`: Convert CSV file to json object in the seeding process.

- `dotenv`: Environment variables management.

- `graphql`: Official graphql library.

- `neo4j-driver`: Official neo4j driver.

- `node-cache`: In-memory cache storing frequently queries results.

- `winston`: Logger.

## Folder Structure

```sh
core/
├── LICENSE
├── README.md
├── build
├── logs
├── node_modules
├── nodemon.json
├── now.json
├── package-lock.json
├── package.json
├── setup
│   ├── createSchema.js
│   ├── createTypes.js
│   └── fieldsMapping.js
├── src
│   ├── consts.ts
│   ├── fieldsMapping.ts
│   ├── graphql-resolvers.ts
│   ├── index.ts
│   ├── neo4j.ts
│   ├── seed.ts
│   └── types.ts
├── tests
│   └── neo4j-tests.js
└── tsconfig.json
```

- `setup`: Contains the all needed files for the initial setup of the system. The files in this folder will be described in detail in the [Setup](setup.md) page.

- `src`: Contains the source files to be compiled to TypeScript.

- `consts.ts`: Contains constants and project settings like PROJECT_STAGE etc'.

- `index.ts`: The entry point to the project. Runs the GraphQL server and listens for incoming requests.

- `neo4j.ts`: A wrapper of neo4j driver implementing CRUD functions and query functions. Implements `DBManager` class.

- `graphql-resolvers.ts`: The GraphQL resolvers which defines execution path for each query or mutation. It corresponds the graphql.schema created in setup stage.

- `fieldsMapping.ts`, `types.ts`: Dynamically created files on the setup stage. More detailed information will be on the "Setup" documentation page.

- `seed.ts`: A script using to seed the database, more details explanation will be on the "Seed" documentation page.
