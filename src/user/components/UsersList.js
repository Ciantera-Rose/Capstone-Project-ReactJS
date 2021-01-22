import React from "react";

import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>No users found</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
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
