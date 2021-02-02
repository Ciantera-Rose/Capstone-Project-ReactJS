import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/components/form/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/utility/Validators";
import { useForm } from "../../shared/components/hooks/Form-hook";
import useHttp from "../../shared/components/hooks/Http-hook";
import AuthContext from "../../shared/components/context/auth-context";
import ErrorModal from "../../presentational-components/ErrorModal";
import Loading from "../../presentational-components/Loading";
import ImgUpload from "../../shared/components/form/ImgUpload";

const NewLocation = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttp();
  const [formState, InputHandler] = useForm(
    {
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
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const locationSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("description", formState.inputs.description.value);
      formData.append("address", formState.inputs.address.value);
      formData.append("userId", auth.userId);
      formData.append("image", formState.inputs.image.value);
      await sendRequest(
        "http://localhost:5000/api/locations",
        "POST",
        formData
      );
      history.push("/");
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="location-form" onSubmit={locationSubmitHandler}>
        {isLoading && <Loading asOverlay />}
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
        <ImgUpload
          id="image"
          onInput={InputHandler}
          errorText="Please provide an image."
        />
        <button type="submit" disabled={!formState.isValid}>
          ADD LOCATION
        </button>
      </form>
    </React.Fragment>
  );
};

export default NewLocation;

// return a form => simple form
// add inputs => make a input component to render here
// add validation onChange
// submit button
