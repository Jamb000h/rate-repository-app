import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderingRule) => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: orderingRule.orderBy,
      orderDirection: orderingRule.orderDirection,
    },
  });

  return { repositories: loading ? undefined : data.repositories };
};

export default useRepositories;
