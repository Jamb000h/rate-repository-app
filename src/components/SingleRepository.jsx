import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem repository={repository} showUrl={true} />;
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository({ id, first: 4 });

  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ListHeaderComponentStyle={{ marginBottom: 10 }}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
    />
  );
};

export default SingleRepository;
