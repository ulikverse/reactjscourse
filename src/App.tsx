import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Ulik 👾"
        email="ulik@gmail.com"
        age={21}
        isMarried={false}
        friends={["jake", "jessica", "jerry"]}
        country={Country.Ukraine}
      />
    </div>
  );
}

export default App;
