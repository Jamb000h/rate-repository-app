import { Alert, FlatList } from "react-native";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import ReviewItem from "./ReviewItem";
import ItemSeparator from "./ItemSeparator";
import useDeleteReview from "../hooks/useDeleteReview";

const MyReviews = () => {
  const { authenticatedUser, refetchReviews } = useAuthenticatedUser(true);
  const [deleteReview] = useDeleteReview();

  const reviews = authenticatedUser
    ? authenticatedUser.reviews.edges.map((edge) => edge.node)
    : [];

  const handleDeleteReview = async (id) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteReview({ id });
              refetchReviews();
            } catch (e) {
              console.error(e);
            }
          },
        },
      ]
    );
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem
          review={item}
          inUserReviewsList={true}
          handleDeleteReview={handleDeleteReview}
        />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
