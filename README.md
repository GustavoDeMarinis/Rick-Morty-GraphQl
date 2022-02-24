# Greener code challenge

The challenge consists in creating a simple web app consuming the Rick and Morty **GraphQL** API.

API Endpoint: https://rickandmortyapi.com/graphql

## Pages to create

- Characters list -> /characters
- Character display -> / characters/:id

## Page specification

- Characters list: This page should display all characters with the following data: Name, gender, image and the character origin name.

- Character display: This page should display one character with the following data: Name, gender, image, all of the episodes the characters apears in and the character origin name and dimension

All the GraphQL queries needed are at the end of this file along with the required technologies. Dependencies are already installed!

Bonus: Add a search input in the Characters list page that filters the characters by name (tip: You have to modify the CharactersQuery 😄 ) and/or paginate Characters list page

## Tech stack

- NextJS
- Typescript
- Apollo Client
- Chakra UI

## GraphQL Queries

Characters list query:

```graphql
query Characters {
  characters {
    results {
      id
      name
      gender
      origin {
        name
      }
    }
  }
}
```

Character display query:

```graphql
query Character($id: ID!) {
  character(id: $id) {
    name
    gender
    image
    episode {
      name
      air_date
    }
    origin {
      name
      dimension
    }
  }
}
```

GL & HF!

Best,

_Teodoro, Co-Founder & CTO @ Greener_
