import { Pressable, StyleSheet, View } from "react-native";
import Text, { Button } from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 10,
  },
  reviewItem: {
    ...theme.horizontalContainer,
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
  actions: {
    ...theme.horizontalContainer,
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    ...theme.button,
    marginTop: 15,
  },
  deleteButton: {
    ...theme.button,
    backgroundColor: theme.colors.error,
    marginTop: 15,
  },
});

const ReviewItem = ({ review, inUserReviewsList, handleDeleteReview }) => {
  const formattedDate = new Date(review.createdAt).toLocaleDateString("fi-FI");
  return (
    <View style={styles.container}>
      <View style={styles.reviewItem}>
        <View style={styles.reviewRating}>
          <Text fontWeight="bold" fontSize="subheading" color="primary">
            {review.rating}
          </Text>
        </View>
        <View style={styles.reviewDetails}>
          <Text fontWeight="bold" fontSize="subheading">
            {inUserReviewsList
              ? review.repository.fullName
              : review.user.username}
          </Text>
          <Text color="textSecondary">{formattedDate}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {inUserReviewsList && (
        <View style={styles.actions}>
          <Link to={`/repository/${review.repository.id}`}>
            <Button style={styles.button}>View repository</Button>
          </Link>
          <Pressable onPress={() => handleDeleteReview(review.id)}>
            <Button style={styles.deleteButton}>Delete review</Button>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
