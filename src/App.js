import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";
import { Navbar } from "./Navbar";
import { useState, createContext } from "react";

export const AppContect = createContext();

function App() {
  const [username, setUsername] = useState("UlikTech");
  return (
    <div className="App">
      <AppContect.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AppContect.Provider>
    </div>
  );
}

export default App;
