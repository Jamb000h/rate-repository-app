import { gql } from "@apollo/client";

import { PAGE_INFO, REPOSITORY_DETAILS, REVIEW_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy!
    $orderDirection: OrderDirection!
    $searchKeyword: String!
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }

  ${REPOSITORY_DETAILS}
  ${PAGE_INFO}
`;

export const GET_REPOSITORY = gql`
  query ($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryDetails
      reviews(first: $first, after: $after) {
        ...ReviewDetails
        pageInfo {
          ...PageInfo
        }
      }
      url
    }
  }

  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_INFO}
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
