import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/form/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/utility/Validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "input change":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
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
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
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

  const locationSubmitHandler = (event) => {
    event.preventDefault();
    // TODO: send data to server
    console.log(formState.inputs);
  };

  return (
    <form className="location-form" onSubmit={locationSubmitHandler}>
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
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter at least 5 characters for a valid description."
        onInput={InputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={InputHandler}
      />
      <button type="submit" disabled={!formState.isValid}>
        ADD LOCATION
      </button>
    </form>
  );
};

export default NewLocation;

// return a form => simple form
// add inputs => make a input component to render here
// add validation onChange
// submit button
