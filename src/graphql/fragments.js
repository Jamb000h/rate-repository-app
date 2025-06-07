import { gql } from "@apollo/client";

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    fullName
    ownerAvatarUrl
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on ReviewConnection {
    edges {
      node {
        id
        text
        rating
        createdAt
        user {
          id
          username
        }
        repository {
          id
          fullName
        }
      }
    }
  }
`;

export const PAGE_INFO = gql`
  fragment PageInfo on PageInfo {
    endCursor
    hasNextPage
  }
`;

export const AUTHENTICATE_INPUT = gql`
  input AuthenticateInput {
    username: String!
    password: String!
  }
`;
