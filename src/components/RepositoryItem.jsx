import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    ...theme.verticalContainer,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  repositoryDetails: {
    gap: 5,
    alignItems: "flex-start",
    flexShrink: 1,
  },
  language: {
    marginTop: 5,
    color: "#ffffff",
    fontSize: 16,
    backgroundColor: "#0366d6",
    borderRadius: 5,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 2,
    paddingBottom: 4,
  },
  repositoryStats: {
    ...theme.horizontalContainer,
    flexGrow: 1,
    justifyContent: "space-between",
    marginTop: 10,
  },
  repositoryStatsItem: {
    ...theme.verticalContainer,
    alignItems: "center",
    flexGrow: 1,
    gap: 5,
  },
});

const prettifyCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const RepositoryStatsItem = ({ label, value }) => {
  return (
    <View style={styles.repositoryStatsItem}>
      <Text fontWeight="bold" fontSize="subheading">
        {prettifyCount(value)}
      </Text>
      <Text fontSize="subheading" color="textSecondary">
        {label}
      </Text>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  const repositoryItem = item.item;

  return (
    <View style={styles.container}>
      <View style={theme.horizontalContainer}>
        <Image
          source={{
            uri: repositoryItem.ownerAvatarUrl,
          }}
          style={styles.avatar}
        />
        <View style={styles.repositoryDetails}>
          <Text fontWeight="bold" fontSize="subheading">
            {repositoryItem.fullName}
          </Text>
          <Text color="textSecondary" fontSize="subheading">
            {repositoryItem.description}
          </Text>
          <Text style={styles.language}>{repositoryItem.language}</Text>
        </View>
      </View>
      <View style={styles.repositoryStats}>
        <RepositoryStatsItem
          label="Stars"
          value={repositoryItem.stargazersCount}
        />
        <RepositoryStatsItem label="Forks" value={repositoryItem.forksCount} />
        <RepositoryStatsItem
          label="Reviews"
          value={repositoryItem.reviewCount}
        />
        <RepositoryStatsItem
          label="Rating"
          value={repositoryItem.ratingAverage}
        />
      </View>
    </View>
  );
};

export default RepositoryItem;
