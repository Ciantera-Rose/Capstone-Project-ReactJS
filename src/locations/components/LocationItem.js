import React, { useState } from "react";

import UserCard from "../../presentational-components/UserCard";

const LocationItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);
  return (
    <li className="location-item">
      <UserCard className="location-item-content">
        <div className="location-item-image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="location-item-info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="location-item-actions">
          <button>VIEW ON MAP</button>
          <button to={`/locations/${props.id}`} n>
            EDIT LOCATION
          </button>
          <button>DELETE</button>
        </div>
      </UserCard>
    </li>
  );
};

export default LocationItem;

// Return a list item
// Output information from location list
// Render image prop
// Render title prop
// Render address
// Render description
// Button to interact with the location
// Open to view on Map
// Edit Location (only see button if userId)
// Delete location (only show if userId)
