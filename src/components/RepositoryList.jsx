import { FlatList, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Link } from "react-router-native";
import { useDebounce } from "use-debounce";
import { Picker } from "@react-native-picker/picker";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import ItemSeparator from "./ItemSeparator";

const RepositoryOrdering = ({ orderingRule, setOrderingRule }) => {
  return (
    <Picker
      selectedValue={orderingRule}
      onValueChange={(itemValue) => setOrderingRule(itemValue)}
      style={{ padding: 10 }}
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

const RepositorySearch = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ padding: 10 }}
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        placeholder="Search repositories..."
      />
    </View>
  );
};

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { orderingRule, setOrderingRule, searchKeyword, setSearchKeyword } =
      this.props;

    return (
      <>
        <RepositorySearch
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />

        <RepositoryOrdering
          orderingRule={orderingRule}
          setOrderingRule={setOrderingRule}
        />
      </>
    );
  };

  render() {
    const { repositories, onEndReach } = this.props;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
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
  }
}

const RepositoryList = () => {
  const [orderingRule, setOrderingRule] = useState("CREATED_AT_DESC");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedSearchKeywod] = useDebounce(searchKeyword, 500);

  // Assume that orderingRule is in the format "<ORDER_BY>_<DIRECTION>"
  const orderBy = orderingRule.slice(0, orderingRule.lastIndexOf("_"));
  const orderDirection = orderingRule.slice(orderingRule.lastIndexOf("_") + 1);

  const { repositories, fetchMore } = useRepositories({
    first: 3,
    orderBy,
    orderDirection,
    searchKeyword: debouncedSearchKeywod,
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderingRule={orderingRule}
      setOrderingRule={setOrderingRule}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
