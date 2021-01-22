import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ciantera Rose",
      image: "https://source.unsplash.com/random",
      locations: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;

// Show list of users and how many locations they have shared
// List of users => accept props in new UsersList
// Items users have shared => UserItem

// No users found working when commented out
