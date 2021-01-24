import React from "react";

import Input from "../../shared/components/form/Input";
const NewLocation = () => {
  return (
    <form className="location-form">
      <Input element="input" type="text" label="Location Title" />
    </form>
  );
};

export default NewLocation;

// return a form => simple form
// add inputs => make a input component to render here
// add validation onChange
// submit button
