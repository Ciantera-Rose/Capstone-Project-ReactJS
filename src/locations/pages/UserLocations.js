import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LocationList from "../components/LocationList";
import useHttp from "../../shared/components/hooks/Http-hook";
import ErrorModal from "../../presentational-components/ErrorModal";
import Loading from "../../presentational-components/Loading";

const UserLocations = () => {
  const [loadedLocations, setloadedLocations] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttp();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/locations/user/${userId}`
        );
        setloadedLocations(responseData.locations);
      } catch (err) {}
    };
    fetchLocations();
  }, [sendRequest, userId]);

  const locationDeleteHandler = (deletedLocationId) => {
    setloadedLocations((prevLocations) =>
      prevLocations.filter((location) => location.id !== deletedLocationId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <Loading />
        </div>
      )}
      {!isLoading && loadedLocations && (
        <LocationList
          items={loadedLocations}
          onDeleteLocation={locationDeleteHandler}
        />
      )}
    </React.Fragment>
  );
};

export default UserLocations;

// Fetch and render all the locations that belong to a user
// Use mock data until backend built
// Return list of locations
// Need a Location list Component to pass to this one
// Need Location item Component to pass to list
// Pass Mock data props
// Adjust routes in app js so correct pages are loaded

// TODO: Need to only show location that belongs to specfic user
// useParams hook (functional comp) returns obj of key/value pairs of URL parameters
// Filter locations to return new array
