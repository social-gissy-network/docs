---
id: backend-setup
title: Setup
sidebar_label: Setup
---

## Quick Start

You can skip steps **2, 3, 4** by running `npm build` command.

## Prerequisites

- A running `neo4j` database instance.
- Set the following environment variables:

  ```sh
  NEO4J_URI=bolt://35.156.6.182:7687
  NEO4J_USER=neo4j
  NEO4J_PASSWORD="xyzw"
  GRAPHQL_LISTEN_PORT=4001
  GRAPHQL_URI=http://localhost:4001/graphql
  ```

## 1. Mapping a data row to an edge

Goto `setup/fieldsMapping.js` and edit the file accordingly to your data.

Meaning, you should provide the mapping between each data row in the `csv` to an edge connecting to nodes (`startNode`, `stopNode`, `edgeInfo`).

- `fieldName` stands for the name of the field as it will be represented in the GraphQL schema.

- `fieldDataName` stands for the name of the field as it shown in the csv header.

- `fieldType` a GraphQL type of the field. If you would like to provide sort and filter options, use `GRAPHQL.GraphQLString`.

### Mapping Example

In the [Hubway](https://s3.amazonaws.com/hubway-data/index.html) dataset, each data row contains the following fields:

```sh
"tripduration",
"starttime",
"stoptime",
"start station id",
"start station name",
"start station latitude",
"start station longitude",
"end station id",
"end station name",
"end station latitude",
"end station longitude",
"bikeid",
"usertype",
"birth year",
"gender"
```

Therefore, a mapping will be:

```js
exports.fieldsMapping = {
  startNode: [
    // required:
    { fieldName: 'id', fieldDataName: 'start station id', fieldType: GRAPHQL.GraphQLID },
    {
      fieldName: 'latitude',
      fieldDataName: 'start station latitude',
      fieldType: GRAPHQL.GraphQLString,
    },
    {
      fieldName: 'longitude',
      fieldDataName: 'start station longitude',
      fieldType: GRAPHQL.GraphQLString,
    },

    // optional:
    { fieldName: 'name', fieldDataName: 'start station name', fieldType: GRAPHQL.GraphQLString },
  ],

  endNode: [
    // required:
    { fieldName: 'id', fieldDataName: 'end station id', fieldType: GRAPHQL.GraphQLID },
    {
      fieldName: 'latitude',
      fieldDataName: 'end station latitude',
      fieldType: GRAPHQL.GraphQLString,
    },
    {
      fieldName: 'longitude',
      fieldDataName: 'end station longitude',
      fieldType: GRAPHQL.GraphQLString,
    },

    // optional:
    { fieldName: 'name', fieldDataName: 'end station name', fieldType: GRAPHQL.GraphQLString },
  ],

  edgeInfo: [
    // required:
    { fieldName: 'startTime', fieldDataName: 'starttime', fieldType: GRAPHQL.GraphQLString },
    { fieldName: 'stopTime', fieldDataName: 'stoptime', fieldType: GRAPHQL.GraphQLString },

    // optional:
    { fieldName: 'bikeID', fieldDataName: 'bikeid', fieldType: GRAPHQL.GraphQLString },
    { fieldName: 'userType', fieldDataName: 'usertype', fieldType: GRAPHQL.GraphQLString },
    { fieldName: 'birthYear', fieldDataName: 'birth year', fieldType: GRAPHQL.GraphQLString },
    { fieldName: 'gender', fieldDataName: 'gender', fieldType: GRAPHQL.GraphQLString },
  ],
};
```

## 2. Create GraphQL Schema

Run the `node setup/createSchema.js` command to create GraphQL schema according to the mapping you provided in the previous stage.

The GraphQL schema provides the type definitions, functions, queries and mutations.

### Schema Example

Generating schema from [Hubway](https://s3.amazonaws.com/hubway-data/index.html) dataset will result `build/schema.graphql` file:

```graphql
type Edge {
  startNode: Node
  stopNode: Node
  startTime: String
  stopTime: String
  bikeID: String
  userType: String
  birthYear: String
  gender: String
  id: ID
}

input EdgeFilterParameter {
  startNode: NodeFilterParameter
  stopNode: NodeFilterParameter
  startTime: StringOperators
  stopTime: StringOperators
  bikeID: StringOperators
  userType: StringOperators
  birthYear: StringOperators
  gender: StringOperators
}

input EdgeSortParameter {
  startNode: NodeSortParameter
  stopNode: NodeSortParameter
  startTime: SortOrder
  stopTime: SortOrder
  bikeID: SortOrder
  userType: SortOrder
  birthYear: SortOrder
  gender: SortOrder
}

type EdgeUpdateResponse {
  success: Boolean
  message: String
  edge: Edge
}

type Mutation {
  CreateEdge(
    startNode: NodeInput
    stopNode: NodeInput
    startTime: String
    stopTime: String
    bikeID: String
    userType: String
    birthYear: String
    gender: String
  ): EdgeUpdateResponse
  UpdateEdge(
    startNode: NodeInput
    stopNode: NodeInput
    startTime: String
    stopTime: String
    bikeID: String
    userType: String
    birthYear: String
    gender: String
  ): EdgeUpdateResponse
  DeleteEdge(id: ID!): EdgeUpdateResponse
  CreateNode(id: ID, latitude: String, longitude: String, name: String): NodeUpdateResponse
  UpdateNode(id: ID!, latitude: String, longitude: String, name: String): NodeUpdateResponse
  DeleteNode(id: ID!): NodeUpdateResponse
}

type Node {
  id: ID
  latitude: String
  longitude: String
  name: String
}

input NodeFilterParameter {
  id: StringOperators
  latitude: StringOperators
  longitude: StringOperators
  name: StringOperators
}

input NodeInput {
  id: ID
  latitude: String
  longitude: String
  name: String
}

input NodeSortParameter {
  id: SortOrder
  latitude: SortOrder
  longitude: SortOrder
  name: SortOrder
}

type NodeUpdateResponse {
  success: Boolean
  message: String
  node: Node
}

type Query {
  Node(id: String!): Node
  Edge(id: String!): Edge
  Nodes(sort: NodeSortParameter, filter: NodeFilterParameter, limit: Int): [Node]
  Edges(sort: EdgeSortParameter, filter: EdgeFilterParameter, limit: Int): [Edge]
  Paths(
    startNodeIDs: [String]
    stopNodeIDs: [String]
    length: Int!
    limit: Int!
    filter: EdgeFilterParameter
  ): [[Edge]]
  MostConnected(
    nodesLimit: Int!
    pathsLimit: Int!
    pathLength: Int!
    filter: EdgeFilterParameter
  ): [[Edge]]
}

enum SortOrder {
  ASC
  DESC
}

input StringOperators {
  eq: String
  contains: String
  gt: String
  lt: String
}
```

## 3. Create TypeScript Types

Run the `node setup/createTypes.js` command to create GraphQL schema according to the mapping you provided in the previous stage.

### Types Example

Generating types for [Hubway](https://s3.amazonaws.com/hubway-data/index.html) dataset will result `build/types.ts` file:

```ts
export interface Node {
  id: string;
  latitude: string;
  longitude: string;
  name: string;
}

export interface Edge {
  startNode: Node;
  stopNode: Node;
  startTime: string;
  stopTime: string;
  bikeID: string;
  userType: string;
  birthYear: string;
  gender: string;
}
```

## 4. Build

Run the `tsc` command to compile the `src` folder to JavaScript. The compiled `.js` files will be in the `build` folder.
