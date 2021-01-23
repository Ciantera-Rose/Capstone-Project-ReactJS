import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Navigation = (props) => {
  return (
    <Header>
      <button className="nav-menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="nav-title">
        <Link to="/">Your Locations</Link>
      </h1>
      <navlinks>...</navlinks>
    </Header>
  );
};

export default Navigation;

// Pass Navigation into Header as child element
// Mobile view: Header needs Side Drawer w/ with hamburger toggle btn feature with the links
// Open / Close The Side Drawer Handler
// Webapp no hamburger drawer feature. Links on top

// Header needs to click
// Header shows user locations
// Btn to open side drawer
// Include NavLinks inside the drawer
