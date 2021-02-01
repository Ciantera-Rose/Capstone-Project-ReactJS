import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/form/Input";
import UserCard from "../../presentational-components/UserCard";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/utility/Validators";
import { useForm } from "../../shared/components/hooks/Form-hook";
import useHttp from "../../shared/components/hooks/Http-hook";

const UpdateLocation = () => {
  const { isLoading, error, sendRequest, clearError } = useHttp();
  const [loadedLocation, setLoadedLocation] = useState();

  const locationId = useParams().locationId;

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
          `http://localhost:5000/api/locations/${locationId}`
        );
        setLoadedLocation(responseData.location);
      } catch (err) {}
    };
  }, [sendRequest, locationId]);

  useEffect(() => {
    if (updatedLocation) {
      setFormData(
        {
          title: {
            value: updatedLocation.title,
            isValid: true,
          },
          description: {
            value: updatedLocation.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, updatedLocation]);

  const locationUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!updatedLocation) {
    return (
      <div className="center">
        <UserCard>
          <h2>Could not find location!</h2>
        </UserCard>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="location-form" onSubmit={locationUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Location Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid location."
        onInput={InputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter at least 5 characters for a valid description."
        onInput={InputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <button type="submit" disabled={!formState.isValid}>
        UPDATE LOCATION
      </button>
    </form>
  );
};

export default UpdateLocation;

// add route to app.js
// add mock data
// /locations/:locationId... get id from url
// only user logged in should update location
// fetch data from server
// update location form with data
