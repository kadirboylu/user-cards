import React from "react";
import "./userList.css";
// Components
import SingleUser from "../SingleUser/SingleUser";

const UserList = ({ users, search, getUser }) => {
  return (
    <div className="user-list">
      <ul>
        {users
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              // Case insensitive search
              val.name.first.toLowerCase().includes(search.toLowerCase()) ||
              val.name.last.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
            return ""; // no match found
          })
          .map((user) => (
            <li key={user.login.uuid}>
              <SingleUser user={user} getUser={getUser} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
