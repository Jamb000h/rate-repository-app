import { StatusBar, StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import theme from "../theme";
import SingleRepository from "./SingleRepository";
import RepositoryReview from "./RepositoryReview";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#898989",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.appBar} />
      <AppBar />
      <Routes>
        <Route path="/" index element={<RepositoryList />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
        <Route path="/review" element={<RepositoryReview />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
