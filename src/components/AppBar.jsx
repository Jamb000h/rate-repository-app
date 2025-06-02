import { View, StyleSheet, Text, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: theme.colors.appBar,
  },
  tab: {
    paddingTop: 20,
    color: "#ffffff",
    fontSize: 20,
  },
});

const AppBarTab = ({ tabTitle }) => {
  return (
    <Pressable onPress={() => console.log("Repositories pressed")}>
      <Text style={styles.tab}>{tabTitle}</Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tabTitle="Repositories" />
    </View>
  );
};

export default AppBar;
