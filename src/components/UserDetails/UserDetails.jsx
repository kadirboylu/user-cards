import React from "react";
import "./userDetails.css";

const UserDetails = ({ users, userId }) => {
  return (
    <div className="user-details-wrapper">
      {users
        .filter((user) => {
          // The user is found by the id of the card clicked to see more details.
          if (user.login.uuid === userId) {
            return user;
          }
          return "";
        })
        .map((user) => (
          <div className="user-details" key={`${user.login.uuid} + 55`}>
            <div className="user-details-img">
              {/* ---- PROFILE IMAGE ---- */}
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />
            </div>
            {/* ---- NAME ---- */}
            <h2>
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <div className="about">
              {/* ---- ABOUT SECTION ---- */}
              <h3>About</h3>
              <h4>
                Gender:{" "}
                <span>
                  {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                </span>
              </h4>
              <h4>
                Age: <span>{user.dob.age}</span>
              </h4>
              <h4>
                Birthday: <span>{user.dob.date.slice(0, 10)}</span>
              </h4>
            </div>
            <div className="contact">
              {/* ---- CONTACT SECTION ---- */}
              <h3>Contact</h3>
              <h4>
                Email:{" "}
                <a className="link" href={`mailto:${user.email}`}>
                  {user.email}
                </a>
              </h4>
              <h4>
                Phone:{" "}
                <a className="link" href={`tel:${user.phone}`}>
                  {user.phone}
                </a>
              </h4>
              <h4>
                Cell:{" "}
                <a className="link" href={`tel:${user.cell}`}>
                  {user.cell}
                </a>
              </h4>
            </div>
            <div className="address">
              {/* ---- ADDRESS SECTION ---- */}
              <h3>Address</h3>
              <address>
                <h4>
                  Street:{" "}
                  <span>
                    {user.location.street.number} {user.location.street.name}
                  </span>
                </h4>
                <h4>
                  City: <span>{user.location.city}</span>
                </h4>
                <h4>
                  State: <span>{user.location.state}</span>
                </h4>
                <h4>
                  Country: <span>{user.location.country}</span>
                </h4>
                <h4>
                  Postcode: <span>{user.location.postcode}</span>
                </h4>
              </address>
            </div>
            {/* User's location by coordinates */}
            <iframe
              title={userId}
              width="300"
              height="200"
              frameBorder={"0"}
              style={{ border: 0 }}
              referrerPolicy={"no-referrer-when-downgrade"}
              src={`https://maps.google.com/maps?q=${user.location.coordinates.latitude},${user.location.coordinates.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            ></iframe>
          </div>
        ))}
    </div>
  );
};

export default UserDetails;
