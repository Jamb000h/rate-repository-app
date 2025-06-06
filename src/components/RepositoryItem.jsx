import { View, Image, StyleSheet, Pressable, Linking } from "react-native";
import Text, { Button } from "./Text";
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
  button: {
    ...theme.button,
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

export const RepositoryItem = ({ repository, showUrl }) => {
  if (!repository) {
    return null;
  }

  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={theme.horizontalContainer}>
        <Image
          source={{
            uri: repository.ownerAvatarUrl,
          }}
          style={styles.avatar}
        />
        <View style={styles.repositoryDetails}>
          <Text fontWeight="bold" fontSize="subheading">
            {repository.fullName}
          </Text>
          <Text color="textSecondary" fontSize="subheading">
            {repository.description}
          </Text>
          <Text style={styles.language}>{repository.language}</Text>
        </View>
      </View>
      <View style={styles.repositoryStats}>
        <RepositoryStatsItem label="Stars" value={repository.stargazersCount} />
        <RepositoryStatsItem label="Forks" value={repository.forksCount} />
        <RepositoryStatsItem label="Reviews" value={repository.reviewCount} />
        <RepositoryStatsItem label="Rating" value={repository.ratingAverage} />
      </View>
      {showUrl && (
        <Pressable
          style={styles.button}
          onPress={() => Linking.openURL(repository.url)}
        >
          <Button>Open in GitHub</Button>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
