import React from "react";

import UserItem from "./UserItem";
import UserCard from "../../presentational-components/UserCard";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <UserCard>
          <h2>No users found</h2>
        </UserCard>
      </div>
    );
  }
  // TODO: How to style UserCard on no users found page
  return (
    <ul className="users-list">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            locationCount={user.locations}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;

// No users found, expects array over users []
// Return a ul and map items (array of objects) to array of elements JSK
// Return a single user item for each user
// Add key prop to list property to fix error
