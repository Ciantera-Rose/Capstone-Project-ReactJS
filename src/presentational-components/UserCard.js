import React from "react";

const UserCard = (props) => {
  return (
    <div className={`usercard ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default UserCard;

// Render a div that encapsulates the user profile name and image
// Take in children props
// Render in UserItem with Avatar, UserCard outside of Link.. so it wraps it
