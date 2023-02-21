import { useContext } from "react";
import { AppContect } from "../App";

export const Home = () => {
  const { username } = useContext(AppContect);
  return <h1>This is the home page and user is: {username}</h1>;
};
