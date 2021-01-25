import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/form/Input";
import { VALIDATOR_REQUIRE } from "../../shared/components/utility/Validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "input change":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formisValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        input: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewLocation = () => {
  const [formState, dispatch] = useReducer(formReducer);
  useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const InputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "input change",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  return (
    <form className="location-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Location Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={InputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="Description"
        label="Location Title"
        validators={[VALIDATOR_MIN_LENGTH(5)]}
        errorText="Please enter at least 5 characters for a valid description."
        onInput={InputHandler}
      />
    </form>
  );
};

export default NewLocation;

// return a form => simple form
// add inputs => make a input component to render here
// add validation onChange
// submit button
