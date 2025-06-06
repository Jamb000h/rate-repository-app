import { FlatList } from "react-native";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import ReviewItem from "./ReviewItem";
import ItemSeparator from "./ItemSeparator";

const MyReviews = () => {
  const { authenticatedUser } = useAuthenticatedUser(true);
  const reviews = authenticatedUser
    ? authenticatedUser.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem review={item} useRepositoryName={true} />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
