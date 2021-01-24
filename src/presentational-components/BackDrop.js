import React from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default BackDrop;

// Render in Navigation w/ drawerIsOpen
// CSS Trasnition library. Add animation if add item to DOM or render item for the first time or remove it.
// Tell the library when the side drawer becomes visible
// Can wrap around aside element
// React Transtition Group doc
// Add and remove from DOM when visible or not visible depending on state
