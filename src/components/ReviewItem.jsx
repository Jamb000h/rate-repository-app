import { StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
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

const ReviewItem = ({ review, useRepositoryName }) => {
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
          {useRepositoryName
            ? review.repository.fullName
            : review.user.username}
        </Text>
        <Text color="textSecondary">{formattedDate}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
