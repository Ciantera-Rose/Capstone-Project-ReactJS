import React from "react";

const UsersItem = (props) => {
  return (
    <li className="">
      <div className="">
        <div className="">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="">
          <h2>{props.name}</h2>
          <h3>
            {props.locationCount}{" "}
            {props.locationCount === 1 ? "Location" : "Locations"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UsersItem;

// List wrapper
// Div wrapper div 1
// Pass user image div 2 and <img tag/>
// Pass user info div 3 <h2> users name </h2>
// Pass # of locations user has created <h3> Location Count <h3> 1 location or many locations
