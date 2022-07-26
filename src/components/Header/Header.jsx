import React from "react";
import "./header.css";

const Header = ({ setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value); // Searched name/surname
  };

  return (
    <div className="header-wrapper">
      <div className="header">
        <h1>
          <a href="/">USER CARDS</a>
        </h1>
      </div>
      <div className="search">
        {/* Search Bar */}
        <input type="text" placeholder="Search users" onChange={handleChange} />
      </div>
    </div>
  );
};

export default Header;
