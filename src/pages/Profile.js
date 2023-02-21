import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContect } from "../App";

export const Profile = () => {
  const { username } = useContext(AppContect);

  return (
    <div>
      Profile, user is: {username}
      <ChangeProfile />
    </div>
  );
};
