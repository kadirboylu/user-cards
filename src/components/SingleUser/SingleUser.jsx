import React from "react";
import { Link } from "react-router-dom";
import "./singleUser.css";

const SingleUser = ({ user, getUser }) => {
  return (
    <div className="user">
      {/* User information */}
      <div className="user-info">
        {/* ---- FULL NAME ---- */}
        <h3 className="user-name">
          {user.name.first} {user.name.last}
        </h3>
        {/* ---- EMAIL ---- */}
        <h4>Email:</h4>
        <a className="link" href={`mailto:${user.email}`}>
          {user.email}
        </a>
        {/* ---- PHONE ---- */}
        <h4>Phone:</h4>
        <a className="link" href={`tel:${user.phone}`}>
          {user.phone}
        </a>
        {/* ---- CITY ---- */}
        <h4>City:</h4>
        <p>{user.location.city}</p>
        {/* ---- COUNTRY ---- */}
        <h4>Country:</h4>
        <p>{user.location.country}</p>
        <Link
          className="link see-more"
          to="/about"
          // Sending the ID of the clicked card to the parent for more details
          onClick={() => getUser(user.login.uuid)}
        >
          Click to see more about {user.name.first} {user.name.last}
        </Link>
      </div>
      <div className="user-img">
        {/* PROFILE PICTRE */}
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
      </div>
    </div>
  );
};

export default SingleUser;
