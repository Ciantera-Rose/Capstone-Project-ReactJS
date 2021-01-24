import React, { useReducer } from "react";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const changeHandler = (event) => {
    dispatch({ type: "change", val: event.target.value });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );
  return (
    <div
      className={`form-control ${!inputState.isValid && `form-control-valid`}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {inputState.isValid && <p>{props.errortext}</p>}
    </div>
  );
};

export default Input;

// if element = input then element stores input else store textarea

// add onChangeHandler in textarea to call () on every keystroke...
// store values
// validate values
// useState or useReducer... manage 2 states, next state depends on previous one
// call () to update state and re-render component
// Reducer() receives an action which you can dispatch and current state
// update current state based on action received
// return new state => back to component to re-render
