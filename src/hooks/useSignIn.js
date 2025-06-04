import { useApolloClient, useMutation } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });

    await authStorage.setAccessToken(data.authenticate.accessToken);
    await apolloClient.resetStore();

    return data;
  };

  return [signIn, result];
};

export default useSignIn;
