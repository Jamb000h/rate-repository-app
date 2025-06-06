import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation ($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const SIGN_UP = gql`
  mutation ($user: CreateUserInput!) {
    createUser(user: $user) {
      id
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation Mutation($review: CreateReviewInput!) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation Mutation($id: ID!) {
    deleteReview(id: $id)
  }
`;
