import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import Input from "../../shared/components/form/Input";
import UserCard from "../../presentational-components/UserCard";
import Loading from "../../presentational-components/Loading";
import ErrorModal from "../../presentational-components/ErrorModal";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/utility/Validators";
import { useForm } from "../../shared/components/hooks/Form-hook";
import useHttp from "../../shared/components/hooks/Http-hook";
import AuthContext from "../../shared/components/context/auth-context";

const UpdateLocation = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttp();
  const [updatedLocation, setUpdatedLocation] = useState();
  const locationId = useParams().locationId;
  const history = useHistory();

  const [formState, InputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const responseData = await sendRequest(
          `https://cjr-capstone-api.herokuapp.com/api/locations/${locationId}`
        );
        setUpdatedLocation(responseData.location);
        setFormData(
          {
            title: {
              value: responseData.location.title,
              isValid: true,
            },
            description: {
              value: responseData.location.description,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchLocation();
  }, [sendRequest, locationId, setFormData]);

  const locationUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `https://cjr-capstone-api.herokuapp.com/api/locations/${locationId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      history.push("/" + auth.userId + "/locations");
    } catch (err) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <Loading />
      </div>
    );
  }

  if (!updatedLocation && !error) {
    return (
      <div className="center">
        <UserCard>
          <h2>Could not find location!</h2>
        </UserCard>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && updatedLocation && (
        <form className="location-form" onSubmit={locationUpdateSubmitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Location Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid location."
            onInput={InputHandler}
            initialValue={updatedLocation.title}
            initialValid={true}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter at least 5 characters for a valid description."
            onInput={InputHandler}
            initialValue={updatedLocation.description}
            initialValid={true}
          />
          <button type="submit" disabled={!formState.isValid}>
            UPDATE LOCATION
          </button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdateLocation;

// add route to app.js
// add mock data
// /locations/:locationId... get id from url
// only user logged in should update location
// fetch data from server
// update location form with data
