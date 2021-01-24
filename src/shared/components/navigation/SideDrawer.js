import React from "react";
import ReactDOM from "react-dom";

const SideDrawer = (props) => {
  const content = <aside className="side-drawer">{props.children}</aside>;

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;

// Slide in and slide out animation. Add Library
// The <aside> tag defines some content aside from the content it is placed in.
// Render in diff part of page than where the drawer is...
// Need to render in Navigation next to Header

// Look into React Portal...
// Allows for rendering a component in a diff place than it's normally rendered
// Render not as a part of navigation
// Add new div to html in front of root div
