import React, { useState } from "react";
import { Link } from "react-router-dom";

import UserCard from "../../presentational-components/UserCard";
import Modal from "../../presentational-components/Modal";
import Map from "../../presentational-components/Map";

const LocationItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);
  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="location-item-modal-content"
        footerClass="location-item-modal-actions"
        footer={<button onClick={closeMapHandler}>CLOSE</button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
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
            <button onClick={openMapHandler}>VIEW ON MAP</button>
            <Link to={`/locations/${props.id}`}>
              <button>EDIT LOCATION</button>
            </Link>
            <button>DELETE</button>
          </div>
        </UserCard>
      </li>
    </React.Fragment>
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

// Render Modal next to list item... portal will render differently
