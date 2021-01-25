import React from "react";

import Input from "../../shared/components/form/Input";
import { VALIDATOR_REQUIRE } from "../../shared/components/utility/Validators";

const NewLocation = () => {
  return (
    <form className="location-form">
      <Input
        element="input"
        type="text"
        label="Location Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
      />
    </form>
  );
};

export default NewLocation;

// return a form => simple form
// add inputs => make a input component to render here
// add validation onChange
// submit button
