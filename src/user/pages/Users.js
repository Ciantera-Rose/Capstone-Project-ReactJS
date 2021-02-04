import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../presentational-components/ErrorModal";
import Loading from "../../presentational-components/Loading";
import useHttp from "../../shared/components/hooks/Http-hook";

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttp();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "https://cjr-capstone-api.herokuapp.com/api/users"
        );

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <Loading />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </React.Fragment>
  );
};

export default Users;

// Show list of users and how many locations they have shared
// List of users => accept props in new UsersList
// Items users have shared => UserItem

// No users found working when commented out
