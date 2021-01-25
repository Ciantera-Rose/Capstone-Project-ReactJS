import React, { useCallback } from "react";

import Input from "../../shared/components/form/Input";
import { VALIDATOR_REQUIRE } from "../../shared/components/utility/Validators";

const NewLocation = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);

  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="location-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Location Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={descriptionInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="Description"
        label="Location Title"
        validators={[VALIDATOR_MIN_LENGTH(5)]}
        errorText="Please enter at least 5 characters for a valid description."
        onInput={titleInputHandler}
      />
    </form>
  );
};

export default NewLocation;

// return a form => simple form
// add inputs => make a input component to render here
// add validation onChange
// submit button
