import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries";

const useAuthenticatedUser = (includeReviews) => {
  const { data, loading, refetch } = useQuery(GET_AUTHENTICATED_USER, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: includeReviews ?? false },
  });

  return {
    authenticatedUser: loading ? null : data.me,
    loading,
    refetchReviews: refetch,
  };
};

export default useAuthenticatedUser;
