import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: variables.orderBy,
      orderDirection: variables.orderDirection,
      searchKeyword: variables.searchKeyword,
    },
  });

  return { repositories: loading ? undefined : data.repositories };
};

export default useRepositories;
