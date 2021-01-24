import React from "react";

import LocationItem from "./LocationItem";

const LocationList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="">
        <UserCard>
          <h2>No Locations found. Please add a location</h2>
          <button>Share Location</button>
        </UserCard>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((location) => (
        <Location
          id={location.id}
          image={location.imageUrl}
          title={location.title}
          description={location.description}
          address={location.address}
          userId={location.user}
          coordinates={location.location}
        />
      ))}
    </ul>
  );
};

export default LocationList;

// Will get items prop, array of locations from LocationItem
// If no locations, return no locations found
// User <UserCard> like in Users if no places found
// Button to share location that leads/links to NewLocation Page
// If locations => return <ul> and map array list of objects to jsx elements
