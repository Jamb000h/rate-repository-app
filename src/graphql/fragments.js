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

export const AUTHENTICATE_INPUT = gql`
  input AuthenticateInput {
    username: String!
    password: String!
  }
`;
