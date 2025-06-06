import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";

const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  return <RepositoryItem repository={repository} showUrl={true} />;
};

export default Repository;
