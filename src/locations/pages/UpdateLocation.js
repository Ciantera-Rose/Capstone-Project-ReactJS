import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/form/Input";
import UserCard from "../../presentational-components/UserCard";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/utility/Validators";
import { useForm } from "../../shared/components/hooks/Form-hook";

const MOCK_LOCATIONS = [
  {
    id: "l1",
    title: "The Brooklyn Mirage",
    description:
      "The Brooklyn Mirage is a breathtaking open-air sanctuary in the heart of the Avant Gardner complex.",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/597a8b3920099e0bff668154/1538683215516-2O43UPWH0BHWLTGPF6DE/ke17ZwdGBToddI8pDm48kEZk6F5PbQiC1r1IZ2IoUeR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfvbNRGeuxQFwQ8dTRP7_IjByFLq5tUM4qN8xXPNmdulg0wU7-gbCzcJVB_xdsPuSg/image-asset.jpeg",
    address: "140 Stewart Ave, Brooklyn, NY 11237",
    location: {
      lat: 40.7108803,
      lng: -73.9257375,
    },
    userId: "u1",
  },
  {
    id: "l2",
    title: "Output",
    description:
      "North Brooklyn's premier electronic and dance music venue that offers a more low-key experience than its bottle-service-heavy competitors, but still delivers heavy-hitting performers",
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/06/25/b8/2d/output.jpg",
    address: "74 Wythe Ave, Brooklyn, NY 11249",
    location: {
      lat: 40.7222917,
      lng: -73.9578222,
    },
    userId: "u2",
  },
];

const UpdateLocation = () => {
  const [isLoading, setIsLoading] = useState(true);
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
  const updatedLocation = MOCK_LOCATIONS.find((l) => l.id === locationId);

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
