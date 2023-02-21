import { useState } from "react";
import { useContext } from "react";
import { AppContect } from "../App";

export const ChangeProfile = (props) => {
  const { setUsername } = useContext(AppContect);

  const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
