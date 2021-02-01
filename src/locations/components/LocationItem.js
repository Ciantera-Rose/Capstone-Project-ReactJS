import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import UserCard from "../../presentational-components/UserCard";
import Modal from "../../presentational-components/Modal";
import Map from "../../presentational-components/Map";
import ErrorModal from "../../presentational-components/ErrorModal";
import Loading from "../../presentational-components/Loading";
import AuthContext from "../../shared/components/context/auth-context";
import useHttp from "../../shared/components/hooks/Http-hook";

const LocationItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttp();
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5000/api/locations/${props.id}`,
        "DELETE"
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
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
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="location-item-modal-actions"
        footer={
          <React.Fragment>
            <button onClick={cancelDeleteHandler}>CANCEL</button>
            <button onClick={confirmDeleteHandler}>DELETE</button>
          </React.Fragment>
        }
      >
        <p>
          Please verify you want to delete this location? This action cannot be
          undone.
        </p>
      </Modal>
      <li className="location-item">
        <UserCard className="location-item-content">
          {isLoading && <Loading asOverlay />}
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
            {auth.userId === props.userId && (
              <Link to={`/locations/${props.id}`}>
                <button>EDIT LOCATION</button>
              </Link>
            )}
            {auth.userId === props.userId && (
              <button onClick={showDeleteWarningHandler}>DELETE</button>
            )}
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
