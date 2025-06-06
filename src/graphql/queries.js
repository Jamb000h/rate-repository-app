import { gql } from "@apollo/client";

import { REPOSITORY_DETAILS, REVIEW_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy!
    $orderDirection: OrderDirection!
    $searchKeyword: String!
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }

  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
      reviews {
        ...ReviewDetails
      }
      url
    }
  }

  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
`;

export const GET_AUTHENTICATED_USER = gql`
  query ($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        ...ReviewDetails
      }
    }
  }

  ${REVIEW_DETAILS}
`;
