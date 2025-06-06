import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  reviewItem: {
    ...theme.horizontalContainer,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  reviewRating: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: theme.colors.primary,
    borderStyle: "solid",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  reviewDetails: {
    gap: 5,
    flexShrink: 1,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem repository={repository} showUrl={true} />;
};

const ReviewItem = ({ review }) => {
  const formattedDate = new Date(review.createdAt).toLocaleDateString("fi-FI");
  return (
    <View style={styles.reviewItem}>
      <View style={styles.reviewRating}>
        <Text fontWeight="bold" fontSize="subheading" color="primary">
          {review.rating}
        </Text>
      </View>
      <View style={styles.reviewDetails}>
        <Text fontWeight="bold" fontSize="subheading">
          {review.user.username}
        </Text>
        <Text color="textSecondary">{formattedDate}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ListHeaderComponentStyle={{ marginBottom: 10 }}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
