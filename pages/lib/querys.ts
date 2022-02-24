import { gql } from "@apollo/client";

export const FILTERED_CHARACTERS = gql`
  query Characters($nameToFilterBy: FilterCharacter) {
    characters(filter: $nameToFilterBy) {
      results {
        id
        name
      }
    }
  }
`;

export const CHARACTER_BY_ID = gql`
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
`;
