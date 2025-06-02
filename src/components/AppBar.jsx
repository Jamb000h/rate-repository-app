import { View, StyleSheet, Text, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    ...theme.horizontalContainer,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: theme.colors.appBar,
  },
  tab: {
    color: "#ffffff",
    fontSize: 20,
  },
});

const AppBarTab = ({ tabTitle, tabTarget }) => {
  return (
    <Link to={tabTarget}>
      <Text style={styles.tab}>{tabTitle}</Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tabTitle="Repositories" tabTarget="/" />
      <AppBarTab tabTitle="Sign In" tabTarget="/signin" />
    </View>
  );
};

export default AppBar;
