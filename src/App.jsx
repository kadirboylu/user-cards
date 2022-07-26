import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
// Components
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  const baseURI = "https://randomuser.me/api/?results=100";

  const [users, setUsers] = useState([]); // Fetched random user data
  const [search, setSearch] = useState(""); // Searched name/surname
  const [userId, setUserId] = useState(); //ID of the clicked card

  // ---- Fetching Data ----
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(baseURI);
      setUsers(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  // ----

  const getUser = (id) => {
    setUserId(id); // ID of the card that was clicked to see more details
  };

  return (
    <div>
      <Router>
        <Header setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <UserList getUser={getUser} users={users} search={search} />
            }
          />
          <Route
            path="/about"
            element={<UserDetails users={users} userId={userId} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
