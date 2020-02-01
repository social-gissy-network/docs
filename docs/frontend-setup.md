---
id: frontend-setup
title: Setup
---

## Prerequisites

- Running Core Instance.
- Setup environment variables:

  ```sh
  MAPBOX_TOKEN=${mapbox_token}
  SERVER_URL=${server_url}
  TYPES_URL=${types_url}
  ```

  - Mapbox Token: [Acquire access Token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/)
  - Server Url: [Core](../backend/setup.md) instance url
    > Example: `https://gissy-graphql.herokuapp.com/`.
  - Types Url: JSON file url.

    > Example: `https://gissy-graphql.herokuapp.com/types`.
    >
    > **Note that** the `Core` instance auto-generating types in `/types` path.

    ```json
    // Types JSON example
    {
      "types": {
          "Node": {
              "fields": [
                  {
                  "name": "id",
                  "type": "ID"
                  },
                  ...
              ],
              "typeName": "ObjectTypeDefinition"
          },
          "Edge": {
              "fields": [
                  {
                  "name": "bikeID",
                  "type": "String"
                  },
                  ...
              ],
              ...
          }
      },
      ...
    }
    ```

## Development

- Setup environment variables within `.env.development`

```sh
# Production
yarn develop

# Components
yarn storybook
```

## Deployment

- Setup environment variables within `.env.production`

```sh
# Application build
yarn build

# Storybook Build
yarn build-storybook

# Run application deployment
yarn serve
```

- Serve `public` folder for the `Gissy-Dashboard` instance.
- Serve `storybook-static` folder for `storybook` instance.
