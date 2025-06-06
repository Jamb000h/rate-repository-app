import { FlatList, View, StyleSheet } from "react-native";
import { useState } from "react";
import { Link } from "react-router-native";
import { Picker } from "@react-native-picker/picker";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryOrdering = ({ orderingRule, setOrderingRule }) => {
  return (
    <Picker
      selectedValue={orderingRule}
      onValueChange={(itemValue) => setOrderingRule(itemValue)}
    >
      <Picker.Item label="Latest repositories" value="CREATED_AT_DESC" />
      <Picker.Item
        label="Highest rated repositories"
        value="RATING_AVERAGE_DESC"
      />
      <Picker.Item
        label="Lowest rated repositories"
        value="RATING_AVERAGE_ASC"
      />
    </Picker>
  );
};

export const RepositoryListContainer = ({
  repositories,
  orderingRule,
  setOrderingRule,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <RepositoryOrdering
          orderingRule={orderingRule}
          setOrderingRule={setOrderingRule}
        />
      }
      renderItem={(item) => {
        return (
          <>
            <Link to={"/repository/" + item.item.id}>
              <RepositoryItem repository={item.item} />
            </Link>
          </>
        );
      }}
    />
  );
};

const RepositoryList = () => {
  const [orderingRule, setOrderingRule] = useState("CREATED_AT_DESC");

  // Assume that orderingRule is in the format "<ORDER_BY>_<DIRECTION>"
  const orderBy = orderingRule.slice(0, orderingRule.lastIndexOf("_"));
  const orderDirection = orderingRule.slice(orderingRule.lastIndexOf("_") + 1);

  const { repositories } = useRepositories({ orderBy, orderDirection });

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderingRule={orderingRule}
      setOrderingRule={setOrderingRule}
    />
  );
};

export default RepositoryList;
