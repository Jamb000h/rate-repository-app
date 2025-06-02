import { View, StyleSheet, Text, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

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

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabTitle="Repositories" tabTarget="/" />
        <AppBarTab tabTitle="Sign In" tabTarget="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
