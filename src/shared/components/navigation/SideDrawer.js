import React from "react";

const SideDrawer = (props) => {
  return <aside className="side-drawer">{props.children}</aside>;
};

export default SideDrawer;

// Slide in and slide out animation. Add Library
// The <aside> tag defines some content aside from the content it is placed in.
// Render in diff part of page than where the drawer is...
// Need to render in Navigation next to Header

// Look into React Portal...
