import React from "react";

const Header = (props) => {
  return <header className="header">{props.children}</header>;
};

export default Header;

// Render components in Header tags, children elements
// Use Header Component in Navigation Component
