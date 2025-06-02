import { View, Text } from "react-native";

const RepositoryItem = ({ item }) => {
  const repositoryItem = item.item;
  return (
    <View>
      <Text>Full name: {repositoryItem.fullName}</Text>
      <Text>Description: {repositoryItem.description}</Text>
      <Text>Language: {repositoryItem.language}</Text>
      <Text>Stars: {repositoryItem.stargazersCount}</Text>
      <Text>Forks: {repositoryItem.forksCount}</Text>
      <Text>Reviews: {repositoryItem.reviewCount}</Text>
      <Text>Rating: {repositoryItem.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
