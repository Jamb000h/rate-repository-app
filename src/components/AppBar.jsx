import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";
import { useApolloClient } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: theme.colors.appBar,
  },
  tab: {
    color: "#ffffff",
    fontSize: 20,
    padding: 5,
    paddingHorizontal: 10,
  },
});

const AppBarTab = ({ tabTitle, tabTarget }) => {
  return (
    <Link to={tabTarget}>
      <Text style={styles.tab}>{tabTitle}</Text>
    </Link>
  );
};

const AppBarAction = ({ actionTitle, action }) => {
  return (
    <Pressable onPress={action}>
      <Text style={styles.tab}>{actionTitle}</Text>
    </Pressable>
  );
};

const AppBar = () => {
  const { authenticatedUser } = useAuthenticatedUser();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabTitle="Repositories" tabTarget="/" />
        {authenticatedUser ? (
          <AppBarAction actionTitle="Sign out" action={signOut} />
        ) : (
          <AppBarTab tabTitle="Sign In" tabTarget="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
