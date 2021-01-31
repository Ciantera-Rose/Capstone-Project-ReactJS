import react from "react";
import React from "react";

import Modal from "./Modal";

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error"
      show={!!props.error}
      footer={<button onClick={props.onClear}>Okay</button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
