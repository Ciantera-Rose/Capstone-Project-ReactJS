import React from "react";
import { Link } from "react-router-dom";

import UserAvatar from "../../presentational-components/UserAvatar";
import UserCard from "../../presentational-components/UserCard";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <UserCard className="user-item-content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item-image">
            <UserAvatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item-info">
            <h2>{props.name}</h2>
            <h3>
              {props.locationCount}
              {props.locationCount === 1 ? "Location" : "Locations"}
            </h3>
          </div>
        </Link>
      </UserCard>
    </li>
  );
};

export default UserItem;

// List wrapper
// Div wrapper div 1
// Pass user image div 2 and <img tag/>
// Pass user info div 3 <h2> users name </h2>
// Pass # of locations user has created <h3> Location Count <h3> 1 location or many locations
// Add dynamic link so you can click on user and be taken to places each user created
